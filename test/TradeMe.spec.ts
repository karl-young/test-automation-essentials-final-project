import { test, expect } from '@playwright/test'
import { TMMainPage } from '../Pages/TMMainPage'

test.describe('Tests Trademe car makes', () => {
  let tmMainPage: TMMainPage

  test.beforeEach(async ({ page }) => {
    tmMainPage = new TMMainPage(page)
    await tmMainPage.navigateToSite() 
  })

  test('verify the car makes are displayed correctly', async ({ page }) => {
    await tmMainPage.selectMake('Ferrari')
    await tmMainPage.clickViewListings()
  })
})
 