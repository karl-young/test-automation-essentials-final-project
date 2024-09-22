import { test, expect } from '@playwright/test'
import { TMMainPage } from '../Pages/tMMainPage'

const carMakes = [
  { name: 'BMW', min: 3101, max: 3201 }, // 3151 ± 50
  { name: 'Mazda', min: 5928, max: 6128 }, // 6028 ± 100
  { name: 'Honda', min: 3322, max: 3472 }, // 3372 ± 50
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
