import 'dotenv/config'
import { test, expect } from '@playwright/test'
import { TradeMeApi } from '../Pages/tradmeApi'

test('Verify car makes with TradeMe API', async ({ request }) => {
  const trademeApiKey = process.env.TRADEME_API_KEY
  const trademeSecret = process.env.TRADEME_API_SECRET

  const trademeApi = new TradeMeApi(trademeApiKey, trademeSecret)

  await test.step('Send request to TradeMe API and verify response is an array of 3 car makes', async () => {
    const responseBody = await trademeApi.getCarMakes(request)
    console.log(responseBody)

    await test.step('Verify the response is an array', () => {
      expect(Array.isArray(responseBody)).toBe(true)
    })

    await test.step('Verify the response contains exactly 3 car makes', () => {
      expect(responseBody.length).toBe(3)
    })
  })
})
