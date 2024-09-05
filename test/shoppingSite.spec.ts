import { test, expect } from '@playwright/test'
import { ShoppingSitePage } from '../Pages/MainPage'

test.describe('Ecommerce Site', () => {
  let shoppingSite: ShoppingSitePage

  test.beforeEach(async ({ page }) => {
    shoppingSite = new ShoppingSitePage(page)
    await shoppingSite.navigateToSite()
    console.log("Logged in as "+ process.env.USERNAME)
  })

  test('Verify stock levels are displayed correctly for each size filter', async ({
    page,
  }) => {
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
      
      await test.step('Given the customer has navigated to the site, when the customer selects a size filter to view available shirt models.', async () => {
        await shoppingSite.selectSize(size)
      })
      await test.step(`Then the stock level for the "${size}" size should be ${expectedStock}.`, async () => {
        const actualStock = await shoppingSite.getStockLevel()
        console.log(`The stock level of ${size} is ${actualStock}.`)
        expect(actualStock).toBe(expectedStock)
      })
    }
  })

  test('Verify adding items to the cart works', async ({ page }) => {
    await test.step('Given the customer has selected 6 items to add to the cart', async () => {
      await shoppingSite.addMultipleItems(6)
    })
    await test.step('When the customer opens the cart', async () => {
      await shoppingSite.clickOpenCheckout()
    })

    await test.step('Then the cart should display 6 items', async () => {
      expect(await shoppingSite.countItemsInCart()).toBe(6)
    })
  })

  test('Verify removing an item from the cart works', async ({ page }) => {
    await test.step('Given the customer has added an item to the cart', async () => {
      await shoppingSite.clickAddToCart(1)
    })
    await test.step('When the customer removes the item from the cart', async () => {
      await shoppingSite.clickRemoveItem(0)
    })
    await test.step('Then the cart should be empty', async () => {
      const subtotal = await shoppingSite.getCartAmount()
      expect(subtotal).toBe('$ 0.00')
    })
  })

  test('Verify the cart total is correct after adding and removing items', async ({
    page,
  }) => {
    await test.step('Given the customer has added 3 items to the cart', async () => {
      await shoppingSite.addMultipleItems(3)
    })
    await test.step('When the customer opens the cart', async () => {
      await shoppingSite.clickOpenCheckout()
    })

    let cartTotal = await shoppingSite.getCartAmount()
    await test.step(`Then the cart should display a total of ${cartTotal} for 3 items`, async () => {
      expect(await shoppingSite.getCartAmount()).toBe(cartTotal)
    })

    await test.step('When the customer removes 1 item from the cart', async () => {
      await shoppingSite.removeItemButton.first().click()
    })

    cartTotal = await shoppingSite.getCartAmount()
    await test.step(`Then the cart should display a total of ${cartTotal} for 2 items`, async () => {
      expect(await shoppingSite.getCartAmount()).toBe(cartTotal)
    })
  })

  test('Verify the checkout process works correctly', async ({ page }) => {
    await test.step('Given the customer has added 3 items to the cart and opened the cart', async () => {
      await shoppingSite.addMultipleItems(3)
      await shoppingSite.clickOpenCheckout()
    })
    await test.step('When the customer proceeds to checkout', async () => {
      await page.waitForTimeout(500)
      await shoppingSite.clickCheckout()
    })
    await test.step('Then the checkout dialog should display the correct subtotal', async () => {
      const cartTotal = await shoppingSite.getCartAmount()
      page.on('dialog', async (dialog) => {
        console.log('Dialog appeared with message:', dialog.message())

        expect(dialog.message()).toBe(`Checkout - subtotal: ${cartTotal}`)
        await page.waitForTimeout(1000)

        await dialog.accept()
      })
    })
  })
})
