import { test, expect } from '@playwright/test'
import { TMMainPage } from '../Pages/tMMainPage'

test.describe('Tests Trademe car makes', () => {
  let tmMainPage: TMMainPage

  test.beforeEach(async ({ page }) => {
    tmMainPage = new TMMainPage(page)
    await tmMainPage.navigateToSite()
  })

  test('verify the car makes are displayed correctly', async ({ page }) => {
    let expectedMakes = {
      BMW: { min: 3092, max: 3192 }, // 3142 ± 50
      Mazda: { min: 5925, max: 6125 }, // 6025 ± 100
      Honda: { min: 3347, max: 3447 }, // 3397 ± 50
      Ferrari: { min: 22, max: 62 }, // 42 ± 20
    }

    for (const [make, expectedRange] of Object.entries(expectedMakes)) {
      await test.step(`Given the customer has selected the make "${make}"`, async () => {
        await tmMainPage.selectMake(make)
      })

      await test.step(`Then the stock level for the "${make}" should be between ${expectedRange.min} and ${expectedRange.max}.`, async () => {
        const actualStock = await tmMainPage.getResultsCount()
        expect(actualStock).toBeGreaterThanOrEqual(expectedRange.min)
        expect(actualStock).toBeLessThanOrEqual(expectedRange.max)
        console.log(
          `Make: ${make}, Expected: ${expectedRange.min} - ${expectedRange.max}, Received: ${actualStock}`
        )
      })
    }
  })
})
