# Week 6 questions: Making our framework more robust with Playwright

**Intructions**
Now that you have automated tests with the Page Object in place, steps to show clearly what's being tested and know how to deal with the playwright.config.ts file, it is time to add pipelines to your project. We will use GitHub Actions to run our tests in the cloud. This will allow us to run our tests in different environments and have a better understanding of how our tests behave in different scenarios.

To add extra spice to this week, we will have also a look at mocking and data-driven testing.

With that in mind, let's start with some interview questions related to our week 6 topics.

## Why is it important to have a CI/CD pipeline in place?
  It can reduce manual effort and human error.
  And can make deployments consistent.
  It can catch bugs early and prevent them from going unnoticed.
  It helps manage the complexity of the project as it grows. 
  CI/CD practices can improve team work by ensuring that changes are integrated and tested frequently, facilitating better coordination among team members.

## What other options are there to run your tests in the cloud?
  GitHub Actions, LambdaTest, Kobiton, BrowserStack, Selenium Grid on Cloud Providers.

## Are automated tests only executed in the CI/CD pipeline? Why?
  they are not only executed in the CI/CD pipeline.
  but they are usually executed in the pipeline because you get continuous feedback. the environment is consistent. and they can run for every change pushed into the repository.
  It can ensure that only code that has passed all tests is released.

## What are the main differences between Jenkins, GitHub Actions, and Azure DevOps Pipelines? 
   Jenkins manual setup and maintenance. can be complex and less user friendly. But is highly customizable with lots of plugins. 
   GitHub Actions is integrated with GitHub. Its easy to set up with YAML files and its is user friendly.
   Azure DevOps pipelines has cloud and on premise capabilities. it has rich set of features and integrations both for CI/CD and  project management. Its user friendly with modern tools.

  

## Complete the following exercises:

It is time to show the world what our test suite is capable of! Your tests will be executed and not in your machine...but in the cloud! We will use GitHub Actions to run our tests in the cloud. This will allow us to run our tests in different environments and have a better understanding of how our tests behave in different scenarios.

Tasks for this week:

1. **Setup a GitHub Actions E2E job**: It will execute the ECommerce tests once per day at 6AM (we want to have fresh results once we arrive with a coffee to the office).

2. **Setup a job for the API Tests**: These are more stable, we just need them to run once a week, Fridays at 9PM.

3. **Mock the response from products.json**: The development team is still working on this one...so you will need to add some fake data in the mix to validate that the shop looks correct.

**Extra**: We want to run the mobile version of the ecommerce site in the pipeline too. How would you approach this problem?

## Once happy with your tests, create a Pull Request in your repository and ask for a review from me. Make sure to include the test results in the PR description.

## Once the PR gets approved, merge it to your main branch.
