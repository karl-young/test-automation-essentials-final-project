# Coding test

This is a test of how you go about producing a good, working automation solution and how you consider and approach the different aspects of automation software. The tools and technologies are based on what we use at ACC.

It consists of two main parts, two web-based tests and one API test.

You do this test in your own time and you have up to 1 week to submit the results. If you do need more time please contact me and this can be arranged.

You only need to complete what you feel comfortable with but you should complete it by yourself.

We do factor your experience into how we review the test.

Seeing your approach and how you do things is more important than getting the right answer.

Do as much as you can and submit your result even if it isn’t finished or ‘perfect’ as a non-working solution is better than no solution.

We all get stuck at times and need help so do as much as you can, note any difficulties or questions so we can discuss your approach.

Feel free to ask for clarification if needed.

# Coding test

The requirements are as follows:

1. **Using the TradeMe website (www.trademe.co.nz) provide an automation test that uses Selenium to verify the number of named car makes available in the Make dropdown box on the Cars search tab on the Motor search page. And provides the number of cars returned when you search for each of the following makes: Ferrari, BMW, Mazda, and Honda.**
2. **Using the TradeMe API sandbox (www.sandbox.trademe.co.nz) verify the number of named car makes available using the TradeMe API.**
3. **Code must be written in TypeScript.**
4. **You solution needs to be put on GitHub (www.github.com) so we can review it and download it.**
5. **Your solution should be documented so we are able to build and run it.**

Notes and hints:

1. **Use the real TradeMe site and Playwright for the UI tests.**
2. **Unfortunately, the TradeMe sandbox for UI is broken. As this test has to use the live site, the number of search results will always be changing, so just use the number that works on the day you write the test. Those tests failing because the number has changed is fine.**
3. **Use the TradeMe sandbox site for the API tests. The documentation is here: [https://developer.trademe.co.nz/api-overview/sandbox-environment](https://developer.trademe.co.nz/api-overview/sandbox-environment)**
4. **The API test may be done with or without authentication.**
5. **Consider how you would add more tests to your solution.**
6. **At ACC, we use steps in our automation frameworks to make it more readable.**
7. **At ACC, all our automation is run via CICD pipelines (Jenkins, Azure DevOps). Use GitHub Actions for this test**
8. **At ACC, our framework includes logging and reporting.**
