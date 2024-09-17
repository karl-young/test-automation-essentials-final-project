import OAuth from 'oauth-1.0a'
import crypto from 'crypto'
import { test, expect } from '@playwright/test'

require('dotenv').config()

test('Verify car makes with TradeMe API', async ({ request }) => {
  const trademeApiKey = process.env.TRADEME_API_KEY
  const trademeSecret = process.env.TRADEME_API_SECRET
  console.log('TRADEME_API_KEY:', process.env.TRADEME_API_KEY)
  console.log('TRADEME_API_SECRET:', process.env.TRADEME_API_SECRET)

  if (!trademeApiKey || trademeSecret) {
    throw new Error('TradeMe API key or secret is not defined')
  }

  const oauth = new OAuth({
    consumer: { key: trademeApiKey, secret: trademeSecret },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto.createHmac('sha1', key).update(base_string).digest('base64')
    },
  })

  const requestData = {
    url: 'https://api.trademe.co.nz/v1/Search/Motors.json',
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

  expect(responseBody).toHaveProperty('List')
})
