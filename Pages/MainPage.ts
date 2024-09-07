import { Locator, Page } from '@playwright/test'
const baseURL = process.env.BASE_URL || "https://react-shopping-cart-67954.firebaseapp.com/"

export class ShoppingSitePage {
  readonly page: Page
  readonly addToCart: Locator
  readonly closeCheckout: Locator
  readonly cartAmount: Locator
  readonly removeItemButton: Locator
  readonly sizeLocator: (size: string) => Locator
  readonly stockLevel: Locator
  readonly openCheckout: Locator
  readonly checkoutButton: Locator

  constructor(page: Page) {
    this.page = page
    this.addToCart = page.getByRole('button', { name: 'Add to cart' })
    this.closeCheckout = page.getByRole('button', { name: 'X' })
    this.cartAmount = page.locator(`.sc-1h98xa9-9`)
    this.openCheckout = page.locator('.sc-1h98xa9-2')
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' })
    this.sizeLocator = (size: string) =>
      page.getByText(`${size}`, { exact: true })
    this.stockLevel = page.locator(`.sc-ebmerl-4 > p:nth-child(1)`)
    this.removeItemButton = page.getByRole('button', {
      name: 'remove product from cart',
    })
  }

  async navigateToSite() {
    await this.page.goto(baseURL)
    await this.page.waitForTimeout(1000)
  }

  async selectSize(size: string) {
    const sizeLocator = this.sizeLocator(size)
    await this.page.waitForSelector(`text=${size}`, { state: 'visible' })
    
    await this.page.waitForTimeout(600)

    await sizeLocator.click()

    await this.page.waitForTimeout(600)

    await sizeLocator.click()
  }

  async getStockLevel() {
    const stockText = (await this.stockLevel.textContent()) || '0'
    await this.page.waitForLoadState('networkidle')
    return parseInt(stockText, 10)
  }

  async clickCloseCheckout() {
    await this.closeCheckout.click()
  }

  async getCartAmount() {
    return await this.cartAmount.textContent()
  }

  async clickAddToCart(index: number) {
    await this.addToCart.nth(index).click()
  }

  async countItemsInCart() {
    return await this.removeItemButton.count()
  }

  async getItemsCount() {
    return await this.addToCart.count()
  }

  async addMultipleItems(count: number) {
    const items = await this.getItemsCount()
    for (let i = 0; i < Math.min(count); i++) {
      await this.clickAddToCart(i)
      await this.clickCloseCheckout()
    }
  }

  async clickOpenCheckout() {
    await this.openCheckout.click()
  }

  async clickRemoveItem(index: number) {
    await this.removeItemButton.nth(index).click()
  }

  async clickCheckout() {
    await this.page.waitForLoadState('networkidle')
    await this.checkoutButton.click()
  }
}
