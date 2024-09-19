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
      BMW: { min: 3101, max: 3201 }, // 3151 ± 50
      Mazda: { min: 5928, max: 6128 }, // 6028 ± 100
      Honda: { min: 3322, max: 3472 }, // 3372 ± 50
      Ferrari: { min: 21, max: 61 }, // 41 ± 20
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
