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
    await test.step('Adding an item to cart', async () => {
      await shoppingSite.clickAddToCart(1)
    })
    await test.step('Removing the item from cart', async () => {
      await shoppingSite.ClickRemoveItem(0)
    })
    await test.step('Expecting the cart to be empty', async () => {
      const subtotal = await shoppingSite.getCartAmount()
      expect(subtotal).toBe('$ 0.00')
    })
  })

  test('Cart total price is correct with additions and removals', async ({
    page,
  }) => {
    await test.step('Adding 3 items to cart', async () => {
      await shoppingSite.addMultipleItems(3)
    })
    await test.step('Re-Opening cart', async () => {
      await shoppingSite.clickOpenCheckout()
    })
    
    let cartTotal = await shoppingSite.getCartAmount()
    await test.step(`Expecting 3 items in cart to be ${cartTotal}`, async () => {
      expect(await shoppingSite.getCartAmount()).toBe(cartTotal)
    })

    await test.step('Removing 1 item from cart', async () => {
      await shoppingSite.removeItemButton.first().click()
    })

    cartTotal = await shoppingSite.getCartAmount()
    await test.step(`Expecting 2 items in cart to be ${cartTotal}`, async () => {
      expect(await shoppingSite.getCartAmount()).toBe(cartTotal)
    })
  })

  test('The checkout works correctly', async ({ page }) => {
    await test.step('Adding 3 items to cart', async () => {
      await shoppingSite.addMultipleItems(3)
      await shoppingSite.clickOpenCheckout()
})
    await test.step('Checking out', async () => {
      await page.waitForTimeout(500)
      await shoppingSite.clickCheckout()
    })
    await test.step('Confirming checkout', async () => {
      const cartTotal = await shoppingSite.getCartAmount()
      page.on('dialog', async (dialog) => {
        console.log('Dialog appeared with message:', dialog.message())
  
        expect(dialog.message()).toBe(`Checkout - subtotal: ${cartTotal}`)
  
        await dialog.accept()
      })
    })
  })
})
