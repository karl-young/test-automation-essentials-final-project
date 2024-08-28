import { test, expect } from '@playwright/test'
import { ShoppingSite } from '../Pages/ShoppingSite'

test.describe('Ecommerce Site', () => {
  let shoppingSite: ShoppingSite

  test.beforeEach(async ({ page }) => {
    shoppingSite = new ShoppingSite(page)

    await shoppingSite.navigateToSite()
  })

  // I need to make this test nicer looking and more readable
  test('Checking specific stock levels for all sizes', async ({ page }) => {
    const expectedStockLevels = {
      XS: 1,
      S: 2,
      M: 1,
      ML: 2,
      L: 10,
      XL: 10,
      XXL: 4,
    }
    for (const [size, expectedStock] of Object.entries(expectedStockLevels)) {
      await test.step('Navigating to size selection', async () => {
        await shoppingSite.selectSize(size)
      })
      await test.step(`Retrieve stock level for size ${size}`, async () => {
        const actualStock = await shoppingSite.getStockLevel()
        console.log(`The stock level of ${size} is ${actualStock}.`)
        expect(actualStock).toBe(expectedStock)
      })
    }
  })

  test('Check that the adding to cart button works', async ({ page }) => {
    await test.step('Adding 6 items to cart', async () => {
      await shoppingSite.addMultipleItems(6)
    })
    await test.step('Opening cart', async () => {
      await shoppingSite.clickOpenCheckout()
    })

    await test.step('Expecting 6 items to be in the cart', async () => {
      expect(await shoppingSite.countItemsInCart()).toBe(6)
    })
  })

  test('Remove item from cart', async ({ page }) => {
    await shoppingSite.clickAddToCart(1)
    await shoppingSite.ClickRemoveItem(0)
    const subtotal = await shoppingSite.getCartAmount()
    expect(subtotal).toBe('$ 0.00')
  })

  test('Total price is correct', async ({ page }) => {
    await shoppingSite.addMultipleItems(3)
    await shoppingSite.clickOpenCheckout()

    expect(await shoppingSite.getCartAmount()).toBe('$ 50.05')
  })

  test('Checking math is correct when adding items', async ({ page }) => {
    await shoppingSite.addMultipleItems(3)
    await shoppingSite.clickOpenCheckout()

    expect(await shoppingSite.getCartAmount()).toBe('$ 50.05')
    await shoppingSite.removeItemButton.first().click()

    expect(await shoppingSite.getCartAmount()).toBe('$ 39.15')
  })

  test('Complete order', async ({ page }) => {
    await shoppingSite.addMultipleItems(3)
    await shoppingSite.clickOpenCheckout()
    console.log('Clicking checkout button...')
    await page.waitForTimeout(500)
    await shoppingSite.clickCheckout()

    page.on('dialog', async (dialog) => {
      console.log('Dialog appeared with message:', dialog.message())

      expect(dialog.message()).toBe('Checkout - Subtotal: $ 50.05')

      await dialog.accept()
    })
  })
})
