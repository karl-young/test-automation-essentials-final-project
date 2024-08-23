import { test, expect } from '@playwright/test'
import { ShoppingSite } from '../Pages/ShoppingSite'


test.describe('Ecommerce Site', () => {
  
  test('checking large stock amount / another way', async ({ page }) => {
    const shoppingSite = new ShoppingSite(page)
    await shoppingSite.selectSize('L')
    
    expect(await shoppingSite.getItemsCount()).toBe(10)
  })

  test('Add 6 items to cart', async ({ page }) => {
    const shoppingSite = new ShoppingSite(page)
    await shoppingSite.addMultipleItems(6)
    await shoppingSite.clickOpenCheckout()
    
    expect(await shoppingSite.countItemsInCart()).toBe(6)
  })

  test('Remove item from cart', async ({ page }) => {
    const shoppingSite = new ShoppingSite(page)
    await shoppingSite.clickAddToCart(1)
    await shoppingSite.ClickRemoveItem(0)
    const subtotal = await shoppingSite.getCartAmount()
    expect(subtotal).toBe('$ 0.00')
  })

  test('Total price is correct', async ({ page }) => {
    const shoppingSite = new ShoppingSite(page)
    await shoppingSite.addMultipleItems(3)
    await shoppingSite.clickOpenCheckout()
    
    expect(await shoppingSite.getCartAmount()).toBe('$ 50.05')
  })

  test('Checking math is correct when adding items', async ({ page }) => {
    const shoppingSite = new ShoppingSite(page)
    await shoppingSite.addMultipleItems(3)
    await shoppingSite.clickOpenCheckout()
    
    expect(await shoppingSite.getCartAmount()).toBe('$ 50.05')
    await shoppingSite.removeItemButton.first().click()
    
    expect(await shoppingSite.getCartAmount()).toBe('$ 39.15')
  })

  test('Complete order', async ({ page }) => {
    const shoppingSite = new ShoppingSite(page)
    await shoppingSite.addMultipleItems(3)
    await shoppingSite.clickOpenCheckout()
    await shoppingSite.clickCheckout()
    

    
    // I still cant get the popup to work for some reason
    const checkoutText = await page
      .getByText('Checkout - Subtotal: $ 50.05')
      .innerText()

    expect(checkoutText).toBe('Checkout - Subtotal: $ 50.05')
  })
})
