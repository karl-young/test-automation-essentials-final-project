import { test, expect } from '@playwright/test'
import { TMMainPage } from '../Pages/TMMainPage'

test.describe('Tests Trademe car makes', () => {
  let tmMainPage: TMMainPage

  test.beforeEach(async ({ page }) => {
    tmMainPage = new TMMainPage(page)
    await tmMainPage.navigateToSite()
  })

  test('verify the car makes are displayed correctly', async ({ page }) => {
    let expectedMakes = {
      BMW: { min: 3139, max: 3339 }, // 3239 ± 100
      Ferrari: { min: 23, max: 63 }, // 43 ± 20
      Mazda: { min: 6171, max: 6371 }, // 6271 ± 100
      Honda: { min: 3436, max: 3536 }, // 3486 ± 50
    }

    for (const [make, expectedRange] of Object.entries(expectedMakes)) {
      await test.step(`Given the customer has selected the make "${make}"`, async () => {
        await tmMainPage.selectMake(make)
      })
      await tmMainPage.clickViewListings()
      
      await test.step(`Then the stock level for the "${make}" should be between ${expectedRange.min} and ${expectedRange.max}.`, async () => {
        const actualStock = await tmMainPage.getResultsCount()
        expect(actualStock).toBeGreaterThanOrEqual(expectedRange.min)
        expect(actualStock).toBeLessThanOrEqual(expectedRange.max)
      })
      await tmMainPage.navigateToSite()
    }
  })
})
