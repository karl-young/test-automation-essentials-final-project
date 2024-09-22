import { test, expect } from '@playwright/test'
import { TMMainPage } from '../Pages/tMMainPage'

// This has to be up to date with trademe for the tests to work.
const carMakes = [
  { name: 'BMW', min: 3105, max: 3115 }, // 3105 ± 10
  { name: 'Mazda', min: 5958, max: 6058 }, // 6008 ± 50
  { name: 'Honda', min: 3319, max: 3329 }, // 3324 ± 5
  { name: 'Ferrari', min: 21, max: 61 }, // 41 ± 20
]

test.describe('TradeMe car make tests', () => {
  let tmMainPage: TMMainPage

  test.beforeEach(async ({ page }) => {
    tmMainPage = new TMMainPage(page)
    await tmMainPage.navigateToSite()
  })

  carMakes.forEach(({ name, min, max }) => {
    test(`verify stock level for ${name} is between ${min} and ${max}`, async ({
      page,
    }) => {
      await test.step(`Given the customer has selected the make "${name}"`, async () => {
        await tmMainPage.selectMake(name)
      })

      await test.step(`Then the stock level for "${name}" should be between ${min} and ${max}`, async () => {
        const actualStock = await tmMainPage.getResultsCount()
        expect(actualStock).toBeGreaterThanOrEqual(min)
        expect(actualStock).toBeLessThanOrEqual(max)
        console.log(
          `Make: ${name}, Expected: ${min} - ${max}, Received: ${actualStock}`
        )
      })
    })
  })
})
