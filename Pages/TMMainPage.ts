import { Locator, Page } from '@playwright/test'
import { parseNumberWithCommas } from '../utils/utility'

const TMbaseURL = process.env.TM_URL || 'https://www.trademe.co.nz/a/motors'

export class TMMainPage {
  readonly page: Page
  readonly makeDropdown: Locator
  readonly viewListings: Locator
  readonly showingResults: Locator

  constructor(page: Page) {
    this.page = page
    this.makeDropdown = this.page.getByLabel('Make (optional) ')
    this.viewListings = page.getByRole('button', { name: 'View listings' })
    this.showingResults = page.getByRole('heading', {
      name: /Showing \d{1,3}(,\d{3})* results/,
    })
  }

  async navigateToSite() {
    await this.page.goto(TMbaseURL, { waitUntil: 'load' })
  }

  async selectMake(make: string) {
    await this.makeDropdown.selectOption({ label: make })
  }

  async clickViewListings() {
    await this.viewListings.click()
  }

  async getResultsCount() {
    await this.showingResults.waitFor({ state: 'visible' })
    let resultsText = await this.showingResults.textContent()
    let resultsMatch = resultsText?.match(/[\d,]+/)
    if (resultsMatch) {
      let parsedNumber = parseNumberWithCommas(resultsMatch[0])
      return parsedNumber
    }
    return 0
  }
}
