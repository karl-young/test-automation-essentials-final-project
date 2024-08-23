import { Locator, Page } from '@playwright/test'
const baseURL = 'https://react-shopping-cart-67954.firebaseapp.com/'
export class ShoppingSite {
  readonly page: page
  readonly addToCart: Locator
  readonly closeCheckout: Locator
  readonly cartAmount: Locator
  readonly removeItemButton: Locator
  readonly sizeLocator: Locator 
  
  constructor(page: Page) {
    let amount: number = 0
    this.page = page
    this.addToCart = page.getByRole('button', { name: 'Add to cart' })
    this.closeCheckout = page.getByRole('button', { name: 'X' })
    this.cartAmount = page.locator(`.sc-1h98xa9-9`)
    this.removeItemButton = page.getByRole('button', {
      name: 'remove product from cart',
    })

    page.goto(baseURL)
  }

  async SelectSize(size: string) {
    const sizeLocator = this.page.locator(`span.checkmark:has-text("${size}")`)
    if ((await this.sizeLocator.count()) > 0) {
      await this.sizeLocator.click()
      await this.page.waitForLoadState('networkidle')
    } else {
      throw new Error(`Size" ${size}" Not Found`)
    }
  }
  async clickAddToCart(index: number) {
    await this.addToCart.nth(index).click()
  }

  async clickCloseCheckout() {
    await this.closeCheckout.click()
  }

  async getCartAmount() {
    console.log(`Cart amount: ${await this.cartAmount.textContent()}`)
    return await this.cartAmount.textContent()
  }

  async addMultipleItems(count: number) {
    const items = this.clickAddToCart(index)
    console.log(`Amount of items: ${items}`)
    for (let i = 0; i < Math.min(count, items); i++) {
      await this.clickAddToCart(i)
      await this.clickCloseCheckout()
    }
  }

  async ClickRemoveItem(index: number) {
    await this.removeItemButton.nth(index).click()
  }
}
