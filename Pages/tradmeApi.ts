// trademeApi.ts
import OAuth from 'oauth-1.0a'
import crypto from 'crypto'

export class TradeMeApi {
  private oauth: OAuth
  private apiKey: string
  private apiSecret: string

  constructor(apiKey: string, apiSecret: string) {
    this.apiKey = apiKey
    this.apiSecret = apiSecret
    this.oauth = new OAuth({
      consumer: { key: this.apiKey, secret: this.apiSecret },
      signature_method: 'HMAC-SHA1',
      hash_function(base_string, key) {
        return crypto.createHmac('sha1', key).update(base_string).digest('base64')
      },
    })
  }

  async getCarMakes(request: any) {
    const requestData = {
      url: 'https://api.tmsandbox.co.nz/v1/seo/motors/search.json?categoryId=268',
      method: 'GET',
    }
    const oauthHeader = this.oauth.toHeader(this.oauth.authorize(requestData))

    const response = await request.get(requestData.url, {
      headers: {
        ...oauthHeader,
        'Content-Type': 'application/json',
      },
    })

    return response.json()
  }
}
