import { Locator, Page } from '@playwright/test'

const TMbaseURL = 'https://www.trademe.co.nz/a/motors'

export class TMMainPage {
  readonly page: Page
  readonly makeDropdown: (make: string) => Locator
  readonly viewListings: Locator

  constructor(page: Page) {
    this.page = page
    this.makeDropdown = (make: string) => this.page.locator(`select[name="make"] > option[value="${make}"]`)
    this.viewListings = page.getByRole('button', { name: 'View listings' })
  }
  
  async navigateToSite() {
    await this.page.goto(TMbaseURL)
    await this.page.waitForLoadState('networkidle')
  }

  async selectMake(make: string) {
    await this.makeDropdown(make).click()
  }

  async clickViewListings() {
    await this.viewListings.click()
  }


}
