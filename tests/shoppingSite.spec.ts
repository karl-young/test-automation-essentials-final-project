import { test, expect } from '@playwright/test'
import { ShoppingSite } from '../Pages/ShoppingSite'

test.describe('Ecommerce Site', () => {
  
  test('checking large stock amount / another way', async ({ page }) => {
    const shoppingSite = new ShoppingSite(page)
    await shoppingSite.SelectSize('L')
    await page.waitForSelector('text=Add to cart', { state: 'visible' })
    let itemList = page.getByRole('button', { name: 'Add to cart' })

    const itemCount = await itemList.count()
    console.log(`Amount of items: ${itemCount}`)
    expect(itemCount).toBe(10)
  })

  test('Add 6 items to cart', async ({ page }) => {
    await page.goto(baseURL)
    const itemList = page.getByRole('button', { name: 'Add to cart' })
    for (let i = 0; i < 6; i++) {
      await itemList.nth(i).click()
      await page.getByRole('button', { name: 'X' }).click()
    }
    await page.getByRole('button', { name: '6' }).click()
    const count = await page.locator('.sc-11uohgb-5').count()
    expect(count).toBe(6)
  })

  test('Remove item from cart', async ({ page }) => {
    const shoppingSite = new ShoppingSite(page)
    await shoppingSite.clickAddToCart(1)
    await shoppingSite.ClickRemoveItem(0)
    const subtotal = await shoppingSite.getCartAmount()
    expect(subtotal).toBe('$ 0.00')
  })

  test('Total price is correct', async ({ page }) => {
    await page.goto(baseURL)
    const items = page.getByRole('button', { name: 'Add to cart' })
    for (let i = 0; i < 3; i++) {
      await items.nth(i).click()
      await page.getByRole('button', { name: 'X' }).click()
    }
    await page.getByRole('button', { name: '3' }).click()
    const total = page.getByText('$ 50.05')
    const totalText = await total.innerText()
    expect(totalText).toBe('$ 50.05')
  })

  test('Checking math is correct when adding items', async ({ page }) => {
    await page.goto(baseURL)
    const items = page.getByRole('button', { name: 'Add to cart' })
    for (let i = 0; i < 3; i++) {
      await items.nth(i).click()
      await page.getByRole('button', { name: 'X' }).click()
    }
    await page.getByRole('button', { name: '3' }).click()
    const totalText = await page.getByText('$ 50.05').innerText()
    expect(totalText).toBe('$ 50.05')
    await page
      .getByRole('button', { name: 'remove product from cart' })
      .first()
      .click()
    const subtotalText = await page.getByText('$ 39.15').innerText()
    expect(subtotalText).toBe('$ 39.15')
  })

  test('Complete order', async ({ page }) => {
    await page.goto(baseURL)
    const items = page.getByRole('button', { name: 'Add to cart' })
    for (let i = 0; i < 3; i++) {
      await items.nth(i).click()
      await page.getByRole('button', { name: 'X' }).click()
    }

    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: 'Checkout' }).click()

    const checkoutText = await page
      .getByText('Checkout - Subtotal: $ 50.05')
      .innerText()

    expect(checkoutText).toBe('Checkout - Subtotal: $ 50.05')
  })
})
