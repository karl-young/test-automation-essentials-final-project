import { Locator, Page } from '@playwright/test'
const baseURL = 'https://react-shopping-cart-67954.firebaseapp.com/'
export class ShoppingSite {
  readonly page: Page
  readonly addToCart: Locator
  readonly closeCheckout: Locator
  readonly cartAmount: Locator
  readonly removeItemButton: Locator
  readonly sizeLocator: Locator
  readonly openCheckout: Locator
  readonly checkoutButton: Locator

  constructor(page: Page) {
    this.page = page
    this.addToCart = page.getByRole('button', { name: 'Add to cart' })
    this.closeCheckout = page.getByRole('button', { name: 'X' })
    this.cartAmount = page.locator(`.sc-1h98xa9-9`)
    this.openCheckout = page.locator('.sc-1h98xa9-2')
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' })
    this.removeItemButton = page.getByRole('button', {
      name: 'remove product from cart',
    })

    page.goto(baseURL)
  }

  async selectSize(size: string) {
    const sizeLocator = this.page.locator(`//label[span[text()="${size}"]]`)
    await sizeLocator.click()
    await this.page.waitForLoadState('networkidle')
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
    const items = this.getItemsCount()
    for (let i = 0; i < Math.min(count); i++) {
      await this.clickAddToCart(i)
      await this.clickCloseCheckout()
    }
  }

  async clickOpenCheckout() {
    await this.openCheckout.click()
  }

  async ClickRemoveItem(index: number) {
    await this.removeItemButton.nth(index).click()
  }

  async clickCheckout() {
    await this.checkoutButton.click()
  }
}
