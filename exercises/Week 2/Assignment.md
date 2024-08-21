# Week 2 questions: Automation Testing and the its basics

**Intructions**
During Week 2 we will get to know more about Test Automation, what it is, why it is important and the main players in the field. We will discuss how to choose what to automate and how to do it. We will also talk about the best practices and common mistakes to avoid when implementing test automation.

With that in mind, let's start with some questions about Test Automation.

## What is test automation and why is it important in software development?
  From what i understand at this point, test automation is writing tests that check certain tasks work properly and can be run with the click of a button to make sure that the site works as intended. Its important because it can save time and effort, doing manual testing can be time consuming. It can also be cost effective as the tests can be rerun and checked to see if everything is working correctly.

## What are the benefits of test automation?
  Test automation once set up makes testing faster and easier because the tests can run by themselves without much effort. they can help catch errors early and will be more reliable as they always do the same things each time they are run.

## What are the different types of test automation frameworks?
  Linear, Modular, Data-driven, Keyword-driven, Hybrid, and BDD

## How does test automation help in improving software quality?
  Test automation can improve software quality by reducing the number of bugs and improving the reliability of the software. It can provide Detailed reports of the test results. They can be run fast and can be rerun to see if everything is working correctly.

## What are the challenges and limitations of test automation?
  Test automation has some challenges, including the initial time and cost to set up and maintain test scripts. Automated tests can break if the application changes slightly, requiring frequent updates to the scripts. Not all testing types can be automated, so manual testing is still needed. Integrating automation into existing workflows and handling large amounts of test data can also be tricky.

## What are the key considerations for selecting test automation tools?
  You have to make sure that the tools support your tech stack. The tools should be easy to use and integrate with your existing workflow. and should handle the current and future testing needs. 

## How does test automation fit into the software development lifecycle?
  It fits into the SDLC by providing fast reliable testing at each stage from development to production. it can help catch bugs early and make sure new changes don't break existing functionality.

## What are the best practices for creating effective test automation scripts?
  Keep Tests Simple: Write clear, concise, and focused tests that check one thing at a time. Use descriptive names for tests and variables. Proitize reusability and readability. write tests that are resilient to small changes and keep them updated so they stay relevant and efficient.
  
## How can test automation be integrated with continuous integration and continuous delivery (CI/CD) pipelines?
  Test automation can be integrated with Continuous Integration and Continuous Delivery (CI/CD) pipelines by automatically triggering tests whenever new code is committed to the repository If the tests pass the build is considered stable and can proceed to the next stage. if they fail it will alert the team and stop the build. 

## What are the common mistakes to avoid when implementing test automation?
  Not all tests are suited for automation mainly the repetitive tasks. neglecting maintenance of test scripts. Having over complex and hard to read test scripts. skipping planning and lack of collaboration.


## Familiarise yourself with the following actions to be performed with Playwright:

1. [Launching a Browser](https://playwright.dev/docs/api/class-test)
2. [Navigating to a URL: "https://the-internet.herokuapp.com"](https://playwright.dev/docs/api/class-page#page-goto)
3. [Read on Locators: What they are and how to use them](https://playwright.dev/docs/locators)
4. [Clicking on Elements:](https://playwright.dev/docs/input#mouse-click). Practice it [here](https://the-internet.herokuapp.com/add_remove_elements/)
5. [Filling Input Fields:](https://playwright.dev/docs/api/class-locator#locator-fill). Practice it [here](https://the-internet.herokuapp.com/inputs)
6. [Selecting Dropdown Options:](https://playwright.dev/docs/api/class-locator#locator-select-option). Practice it [here](https://the-internet.herokuapp.com/dropdown)
7. [Selecting and unselecting checkboxes:](https://playwright.dev/docs/input#checkboxes-and-radio-buttons). Practice it [here](https://the-internet.herokuapp.com/checkboxes)

Feel free to practice these actions in the heroku URL assigned to each task to enhance your test automation skills.
