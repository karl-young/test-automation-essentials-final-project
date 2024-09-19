import 'dotenv/config'
import OAuth from 'oauth-1.0a'
import crypto from 'crypto'
import { test, expect } from '@playwright/test'

test('Verify car makes with TradeMe API', async ({ request }) => {
  const trademeApiKey = process.env.TRADEME_API_KEY
  const trademeSecret = process.env.TRADEME_API_SECRET

  const oauth = new OAuth({
    consumer: { key: trademeApiKey, secret: trademeSecret },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto.createHmac('sha1', key).update(base_string).digest('base64')
    },
  })

  const requestData = {
    url: 'https://api.tmsandbox.co.nz/v1/seo/motors/search.json?categoryId=268',
    method: 'GET',
  }

  const oauthHeader = oauth.toHeader(oauth.authorize(requestData))

  const response = await request.get(requestData.url, {
    headers: {
      ...oauthHeader,
      'Content-Type': 'application/json',
    },
  })

  const responseBody = await response.json()
  console.log(responseBody)
  expect(Array.isArray(responseBody)).toBe(true)
  expect(responseBody.length).toBe(3)

})
