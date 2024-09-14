import { Locator, Page } from '@playwright/test'
import { parseNumberWithCommas } from '../utils/utility'

const TMbaseURL = process.env.TM_URL || 'https://www.trademe.co.nz/a/motors'

export class TMMainPage {
  readonly page: Page
  readonly makeDropdown: Locator
  readonly viewListings: Locator
  readonly showingResults: Locator
  readonly makeButton: Locator
  readonly filterMake: (make: string) => Locator
  readonly viewResults: Locator

  constructor(page: Page) {
    this.page = page
    this.makeDropdown = this.page.getByLabel('Make (optional) ')
    this.viewListings = page.getByRole('button', { name: 'View listings' })
    this.showingResults = page.getByRole('heading', {
      name: /Showing \d{1,3}(,\d{3})* results/,
    })
    this.makeButton = page.getByRole('button', {
      name: new RegExp(`Make:.*Open content`, 'i'),
    })
    this.filterMake = (make: string) =>
      page.locator('tg-radio-item').filter({ hasText: make })
    this.viewResults = page.getByRole('button', {
      name: /View \d{1,3}(,\d{3})* results/,
    })
  }
  async navigateToSite() {
    await this.page.goto(TMbaseURL, { waitUntil: 'load' })
  }

  async selectMake(make: string) {
    if (await this.makeDropdown.isVisible()) {
      await this.makeDropdown.selectOption({ label: make })
      await this.clickViewListings()
    } else {
      await this.selectNextMake(make)
    }
    
  }

  async selectNextMake(make: string) {
    await this.makeButton.click()
    await this.filterMake(make).isVisible()
    await this.filterMake(make).click()
    await this.viewResults.isVisible()
    await this.viewResults.click()
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
