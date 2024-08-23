# Week 4 questions: Automation best practices and Playwright

**Intructions**
During Week 4 we will work on our own automation framework repository and learn about automation best practices and Playwright. This repository will serve as the foundation for your final project, so treat it as you would a real piece of work in a real project with fellow testers and developers looking at it...because that's what will happen! We will also learn about the Page Object Model, automation best practices, and Playwright.

With that in mind, let's start with some interview questions related to our week 4 topics.

## What is the Page Object Model?
   POM is a pattern that allows us to define reusable objects that we can use across our tests. This allows us to make our tests more readable and more maintainable.

## What are the benefits of using the Page Object Model? 
  Improved test maintainability and reusability.
  Makes it easier to read and understand the code.
  It makes it easier to manage as your project grows.
  It encapsulates the code that is shared between tests. 

## What are the best practices for writing automated tests?
  Keep tests independent of each other. Use descriptive names for tests and variables. Follow the DRY (Do not Repeat Yourself) principle.
  Wite tests that are stable and are resilient to small changes and keep them updated so they stay relevant and efficient. 
  Integrate your automated tests into your Continuous Integration/Continuous Delivery pipelines to catch issues early and ensure continuous quality.

## What is Playwright?
  It is a automation testing framework.

## What are the key features of Playwright?
  Cross-browser testing.
  Multi-language support.
  Headless mode.
  Auto-waiting for elements to load.
  flexible selector engines, including text, CSS, XPath, and custom selectors, making it easier to target specific elements.
  Rich Api for assertions and actions.
  It is designed for speed and reliability.

## What are the differences between Playwright and Selenium WebDriver?
  Playwright is faster than Selenium WebDriver.
  Playwright automatically waits for elements to load.
  Playwright supports multiple browsers contexts in a single instance selenium doesn't natively.



## What are the advantages of using Playwright over Selenium WebDriver?
  Cross-browser testing.
  Playwright handles dynamic content better 
  Playwright Includes built-in auto-waiting and retry mechanisms
  playwright Comes with its own test runner, which is optimized for running Playwright tests

## What are the disadvantages of using Playwright over Selenium WebDriver?
  Playwright has Some tools, integrations, and community support may not be as extensive or mature as those available for Selenium.
  Some teams may not have learnt the new api and concepts yet.
  Playwright can consume more resources than Selenium as selenium can be more optimized.


## What are the best practices for writing Playwright tests?
  Keep your tests organized. Use descriptive names for tests and variables. Follow the DRY (Do not Repeat Yourself) principle.
  Use the Page Object Model to create reusable objects that we can use across our tests.
  Use descriptive names for tests and variables.
  Use more specific locators.
  Document your tests

## Complete the following exercises:

We have this wonder of design...an e-commerce site to buy clothes! You can access it [here](https://react-shopping-cart-67954.firebaseapp.com). Currently, we are working on the shopping cart feature. Your task is to automate the following scenarios using Playwright:

1. **Filter**: Filter by size and validate the results are showing the criteria you selected.

2. **Adding Products**: Add a product to the cart and validate it is there.

3. **Removing a product**: Remove a product from the cart and validate it is not there.

4. **Total price**: Add more than one product to the cart and validate the total price is correct.

5. **Checkout**: Complete the purchase and validate the order was successful (at the moment you will see a modal with a message, no payment methods available yet for testing).

**Extra**: Any other tests you can think of at this stage of the development?

## Once happy with your tests, create a Pull Request in your repository and ask for a review from me. Make sure to include the test results in the PR description.

## Once the PR gets approved, merge it to your main branch.

Feel free to practice these actions in the heroku URL assigned to each task to enhance your test automation skills.
