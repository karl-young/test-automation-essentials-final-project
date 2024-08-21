# Week 3 questions: Automation Testing and the its basics

**Intructions**
During Week 3 we will are increasing the difficulty just a little bit 🤖. We will write some API Automated tests for a "real" API, get to know how API Automation works, what requests and responses look like and what is important to test on them.

With that in mind, let's start with some questions about Test Automation.

## Can you explain what authentication via token is and how does it work?
  It is when someone logs in receives a token then uses that to access an api by sending it in each request.

## What other types of authentication are there?
  There are many different types of authentication. Basic Authentication, Bearer Token, Api Key, OAuth, JWT and Digest Authentication.

## What is the body of a request? What is the difference with the body of a response?
  The body of a request is part of an HTTP request where the data is sent to the server.
  The body of a response is part of an HTTP response where the data is sent back to the client.
  The main difference is that the request body contains data the client sends to the server, while the response body contains data the server sends back to the client. 

## What are the headers of a request? And the ones from a response?
  The headers of a request are Key Value pairs that contain information about the request. The headers of a response are Key Value pairs that contain information about the response.


## Complete the following exercises:

1. Start by getting a list of books from `https://simple-books-api.glitch.me/books`. Can you add a query parameter for type and limit the results to 5?

2. Generate a token to use later for authenticated requests using `https://simple-books-api.glitch.me/api-clients/`. The token will be granted when sending a POST request with a JSON body like the one below (add any random email so it is not a repeated one):

```
{
    "clientName": "Postman",
    "clientEmail": "testToken@example.com"
}
```

## Submit an order

3. POST `/orders`

Allows you to submit a new order. Requires authentication.

The request body needs to be in JSON format and include the following properties:

`bookId` - Integer - Required
`customerName` - String - Required

### Example

```POST /orders/
Authorization: Bearer <YOUR TOKEN>

{
"bookId": 1,
"customerName": "John"
}
```

The response body will contain the order Id.

### Get all orders

4. GET `/orders`

Allows you to view all orders. Requires authentication.

### Get an order

5. GET `/orders/:orderId`

Allows you to view an existing order. Requires authentication.

### Update an order

6. PATCH `/orders/:orderId`

Update an existing order. Requires authentication.

The request body needs to be in JSON format and allows you to update the following properties:

`customerName` - String

### Example

```PATCH /orders/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>

{
"customerName": "John"
}
```

### Delete an order

7. DELETE `/orders/:orderId`

Delete an existing order. Requires authentication.

The request body needs to be empty.

Example

```
DELETE /orders/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>
```

8. Optional: Perform these same tests using Postman, Thunder Client and Playwright.
9. Optional: Create an issue on your GitHub repository with the title "Week 3 - API Automation" and write a brief summary of what you learned during this week, validate that it was created and delete it. For this, you will need to use GitHub's API. You can find more information about it [here](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue).

Feel free to practice these actions in the heroku URL assigned to each task to enhance your test automation skills.
