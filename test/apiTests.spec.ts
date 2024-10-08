import { test, expect } from '@playwright/test'

const baseURL = `https://simple-books-api.glitch.me`

test.describe('Book api test', () => {
  let token: string
  let orderId: string

  test.beforeAll(async ({ request }) => {
    const response = await request.post(`${baseURL}/api-clients`, {
      data: {
        clientName: 'Frank',
        clientEmail: `test${Date.now()}@example.com`,
      },
    })

    expect(response.status()).toBe(201)
    const body = await response.json()
    token = body.accessToken
    expect(token).toBeTruthy()
  })

  test('Register API client to get token', async ({ request }) => {
    expect(token).toBeTruthy()
  })

  test('Submit a new order', async ({ request }) => {
    let response = await request.post(`${baseURL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        bookId: 1,
        customerName: 'Dave',
      },
    })

    expect(response.status()).toBe(201)
    const body = await response.json()
    orderId = body.orderId
    expect(orderId).toBeTruthy()
  })

  test('Get an order', async ({ request }) => {
    const response1 = await request.post(`${baseURL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        bookId: 1,
        customerName: 'Dave',
      },
    })

    expect(response1.status()).toBe(201)
    const body1 = await response1.json()
    orderId = body1.orderId
    expect(orderId).toBeTruthy()
    const response = await request.get(`${baseURL}/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    expect(response.status()).toBe(200)
    const body = await response.json()
    console.log(body)
    expect(body.id).toBe(orderId)
    expect(body.customerName).toBe('Dave')
  })

  test.fixme('Delete an order', async ({ request }) => {
    const response1 = await request.delete(`${baseURL}/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        bookId: 1,
        customerName: 'Dave',
      },
    })
    // not currently working come back to this.
    expect(response1.status()).toBe(204)
  })
})
