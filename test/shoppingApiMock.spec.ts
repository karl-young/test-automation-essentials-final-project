import { test, expect } from '@playwright/test'
import mockProductsJson from './mocks/mockProducts.json'

test.describe('Shopping API Mock', () => {
  const baseURL = `https://react-shopping-cart-67954.firebaseapp.com`
  test('Mocks the shopping API with fake data', async ({ page }) => {
    await test.step('Mock the API', async () => {
      await page.route('**/products.json', async (route) => {
        route.fulfill({
          body: JSON.stringify(mockProductsJson),
        })
      })
    })

    await test.step('Visit the site', async () => {
      await page.goto(`${baseURL}/products.json`)
    })

    await test.step('Verify products are displayed', async () => {
      await expect(
        page.getByText('White T-shirt With Cactus Print')
      ).toBeVisible()
    })
  })

  test('Gets real response from API and adds some mock data.', async ({
    page,
  }) => {
    await test.step('Intercept the API request and mock the response', async () => {
      await page.route('**/products.json', async (route) => {
        // fetch the original response
        const response = await route.fetch()
        const json = await response.json()
        json.products.push({
          ...mockProductsJson,
        })
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(json),
        })
      })
    })

    await test.step('Visit the site', async () => {
      await page.goto(baseURL)
    })

    await test.step('Verify products are displayed', async () => {
      await expect(
        page.getByText('White T-shirt With Cactus Print')
      ).toBeVisible()
    })
  })
})
