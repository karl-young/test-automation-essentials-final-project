This Document is a collection of my answers to the questions asked in the [Day 1 exercise](../exercises/Week%201/Day1.md).

## Functional Testing

1. **E-commerce Website: Sign-Up Process**

   Detailed test cases for the sign-up process of an e-commerce website.

    ### Test Case Id: TC-01

    #### Test Case Title: Valid Sign-Up
     Description:  Check that a user can sign up with valid email and password.

    Preconditions: User is on the sign up page.

    #### Steps:
    1. Get to the sign up page.
    2. Enter valid email and password.
    3. Click on the sign up button.
    
    #### Expected Results: 
     - User should be signed up successfully.
     - A confirmation email should be sent and received.
     - A success message should be displayed.

     ---

    ### Test Case Id: TC-02

    #### Test Case Title: Invalid Email Format

     Description:  Check that a user cannot sign up with an invalid email format.

    Preconditions: User is on the sign up page.

    #### Steps:
    1. Get to the sign up page.
    2. Enter invalid email and password.
    3. Click on the sign up button.
    
    #### Expected Results: 
     - An error message should be displayed saying that the email or password is invalid.

     ---

    ### Test Case Id: TC-03

    #### Test Case Title: Missing Required Fields

     Description:  Check that a user cannot sign up with missing required fields.

    Preconditions: User is on the sign up page.

    #### Steps:
    1. Get to the sign up page.
    2. Click on the sign up button.
    
    #### Expected Results: 
     - An error message should be displayed saying that the email and password are required.

     ---

    ### Test Case Id: TC-04

    #### Test Case Title: Invalid Password

     Description:  Check that a user cannot sign up with an invalid password.

    Preconditions: User is on the sign up page.

    #### Steps:
    1. Get to the sign up page.
    2. Enter valid email and invalid password.
    3. Click on the sign up button.
    
    #### Expected Results: 
     - An error message should be displayed saying that the password or email is invalid.

     ---

     ### Test Case Id: TC-05

     #### Test Case Title: Email Already Exists

     Description:  Check that a user cannot sign up with an email that already exists.

    Preconditions: User is on the sign up page.

    #### Steps:
    1. Get to the sign up page.
    2. Enter an email that already exists.
    3. Click on the sign up button.
    
    #### Expected Results: 
     - An error message should be displayed saying that the email already exists.

     ---
---

2. **Social Media Platform: Post Creation**

    Detailed test cases for the post creation of a social media platform.

    ### Test Case Id: TC-01

    #### Test Case Title: Valid Post Creation

     Description:  Check that a user can create a post with valid content.

    Preconditions: User is on the post creation page.

    #### Steps:
    1. Get to the post creation page.
    2. Enter valid content.
    3. Click on the post button.
    
    #### Expected Results: 
     - A success message should be displayed and the post should be added to the user's feed.
     ---

    ### Test Case Id: TC-02

    #### Test Case Title: Invalid Post Creation

     Description:  Check that a user cannot create a post with invalid content.

    Preconditions: User is on the post creation page.

    #### Steps:
    1. Get to the post creation page.
    2. Enter invalid content.
    3. Click on the post button.
    
    #### Expected Results: 
     - An error message should be displayed saying that the content is invalid.

     ---

    ### Test Case Id: TC-03

    #### Test Case Title: Post Creation with Image

     Description:  Check that a user can create a post with an image.

    Preconditions: User is on the post creation page.

    #### Steps:
    1. Get to the post creation page.
    2. Upload an image.
    3. Click on the post button.
    
    #### Expected Results: 
     - A success message should be displayed and the image post should be added to the user's feed.

     ---

    ### Test Case Id: TC-04

    #### Test Case Title: Post Creation with Video

     Description:  Check that a user can create a post with a video.

    Preconditions: User is on the post creation page.

    #### Steps:
    1. Get to the post creation page.
    2. Upload a video.
    3. Click on the post button.
    
    #### Expected Results: 
     - A success message should be displayed and the video post should be added to the user's feed.

     ---

    ### Test Case Id: TC-05

    #### Test Case Title: Post Creation with Invalid File Format

     Description:  Check that a user cannot create a post with an invalid file format.

    Preconditions: User is on the post creation page.

    #### Steps:
    1. Get to the post creation page.
    2. Upload an invalid file format.
    3. Click on the post button.
    
    #### Expected Results: 
     - An error message should be displayed saying that the file format is invalid.

     ---
---

3. **Online Banking: Fund Transfer**

    Detailed test cases for the fund transfer of an online banking application.

    ### Test Case Id: TC-01

    #### Test Case Title: Valid Fund Transfer

     Description:  Check that a user can transfer funds to another user.

    Preconditions: User is on the fund transfer page.

    #### Steps:
    1. Get to the fund transfer page.
    2. Enter valid account numbers.
    3. Click on the transfer button.
    
    #### Expected Results: 
     - A success message should be displayed and the fund transfer should be processed.
     - The account balances should be updated correctly.

     ---

    ### Test Case Id: TC-02

    #### Test Case Title: Invalid Account Fund Transfer

     Description:  Check that a user cannot transfer funds to an invalid account number.

    Preconditions: User is on the fund transfer page.

    #### Steps:
    1. Get to the fund transfer page.
    2. Enter an invalid account number.
    3. Click on the transfer button.
    
    #### Expected Results: 
     - An error message should be displayed saying that the account number is invalid.
     - The account balances should not be updated.

     ---

    ### Test Case Id: TC-03

    #### Test Case Title: Insufficient Funds Fund Transfer

     Description:  Check that a user cannot transfer funds when they have insufficient funds.

    Preconditions: User is on the fund transfer page.

    #### Steps:
    1. Get to the fund transfer page.
    2. Enter valid account numbers.
    3. Click on the transfer button.
    
    #### Expected Results: 
     - An error message should be displayed saying that the funds are insufficient.
     - The account balances should not be updated.

     ---

---

4. **Library Management System: Book Search**

   Detailed test cases for the book search functionality of a library search system.

    ### Test Case Id: TC-01

    #### Test Case Title: search by title

     Description:  Check that a user can search for books by title.

    Preconditions: User is on the library search page.

    #### Steps:
    1. Get to the library search page.
    2. Enter a title in the search bar.
    3. Click on the search button.
    
    #### Expected Results: 
     - The search results should be displayed with the correct title.
     
     ---

    ### Test Case Id: TC-02

    #### Test Case Title: search by author

     Description:  Check that a user can search for books by author.

    Preconditions: User is on the library search page.

    #### Steps:
    1. Get to the library search page.
    2. Enter an author in the search bar.
    3. Click on the search button.
    
    #### Expected Results: 
     - The search results should be displayed.
     - The search results should be accurate and relevant.

     ---

    ### Test Case Id: TC-03
    
    #### Test Case Title: search by genre

     Description:  Check that a user can search for books by genre.

    Preconditions: User is on the library search page.

    #### Steps:
    1. Get to the library search page.
    2. Enter a genre in the search bar.
    3. Click on the search button.
    
    #### Expected Results: 
     - The search results should be displayed with the correct genre.
     - The search results should be relevant to the genre.

     ---

    ### Test Case Id: TC-04

    #### Test Case Title: no results found

     Description:  Check that a user cannot search for books that do not exist.

    Preconditions: User is on the library search page.

    #### Steps:
    1. Get to the library search page.
    2. Enter an invalid search term in the search bar.
    3. Click on the search button.
    
    #### Expected Results: 
     - The search shows an error message indicating that no results were found.

     ---
---

5. **Health Tracking App: Activity Logging**

   Detailed test cases for the activity logging functionality of a health tracking app.

    ### Test Case Id: TC-01

    #### Test Case Title: logging a run

     Description:  Check that a user can log a run.

    Preconditions: User is on the activity logging page.

    #### Steps:
    1. Get to the activity logging page.
    2. Enter the distance and time of the run.
    3. Click on the log button.
    
    #### Expected Results: 
     - A success message should be displayed and the run should be added to the user's running activity history.

     ---

    ### Test Case Id: TC-02

    #### Test Case Title: logging a swim

     Description:  Check that a user can log a swim.

    Preconditions: User is on the activity logging page.

    #### Steps:
    1. Get to the activity logging page.
    2. Enter the distance and time of the swim.
    3. Click on the log button.
    
    #### Expected Results: 
     - A success message should be displayed and the swim should be added to the user's swimming activity history.

     ---

    ### Test Case Id: TC-03

    #### Test Case Title: logging a bike ride

     Description:  Check that a user can log a bike ride.

    Preconditions: User is on the activity logging page.

    #### Steps:
    1. Get to the activity logging page.
    2. Enter the distance and time of the bike ride.
    3. Click on the log button.
    
    #### Expected Results: 
     - A success message should be displayed and the bike ride should be added to the user's cycling activity history.

     ---

    ### Test Case Id: TC-04

    #### Test Case Title: logging a invalid activity

     Description:  Check that a user cannot log an invalid activity.

    Preconditions: User is on the activity logging page.

    #### Steps:
    1. Get to the activity logging page.
    2. Enter an invalid activity.
    3. Click on the log button.
    
    #### Expected Results: 
     - An error message should be displayed indicating that the activity is invalid.

     ---

     ### Test Case Id: TC-05

    #### Test Case Title: negative activity logged

     Description:  Check that a user cannot log a negative activity.

    Preconditions: User is on the activity logging page.

    #### Steps:
    1. Get to the activity logging page.
    2. Enter a negative distance and/or time for the activity.
    3. Click on the log button.
    
    #### Expected Results: 
     - An error message should be displayed indicating that the activity time/distance is invalid.

     ---
---


## Black Box Testing Techniques


1. **Movie Streaming Service: Login Functionality**
  
  Detailed test cases for the login functionality of a movie streaming service.

    ### Test Case Id: TC-01

    #### Test Case Title: Valid Login

     Description:  Check that a user can login with valid credentials.

    Preconditions: User is on the login page.
    The user has a registered account with valid credentials.


    #### Steps:
    1. Get to the login page.
    2. Enter valid credentials.
    3. Click on the login button.
    
    #### Expected Results: 
     - The user should be redirected to the homepage or dashboard.
     -  A success message, such as "Welcome back!" should be displayed.
     - The user's session should be started, allowing them to navigate through the platform without needing to log in again.

     ---

    ### Test Case Id: TC-02

    #### Test Case Title: Invalid Login

     Description:  Check that a user cannot login with invalid credentials.

    Preconditions: User is on the login page.

    #### Steps:
    1. Get to the login page.
    2. Enter invalid credentials.
    3. Click on the login button.
    
    #### Expected Results: 
     - An error message, such as "Invalid email or password." should be displayed.
     - The user should remain on the login page.

     ---

     ### Test Case Id: TC-03

    #### Test Case Title: Logout

     Description:  Check that a user can logout.

    Preconditions: User is logged in.

    #### Steps:
    1. Get to the homepage or dashboard.
    2. Click on the logout button.
    
    #### Expected Results: 
     - The user should be logged out.
     - The user should be redirected to the login page.

     ---

     ### Test Case Id: TC-04

     #### Test Case Title: Unregistered Email

     Description:  Check that a user cannot login with an unregistered email.

    Preconditions: User is on the login page.

    #### Steps:
    1. Get to the login page.
    2. Enter an unregistered email.
    3. Click on the login button.
    
    #### Expected Results: 
     - An error message, such as "Invalid email or password." should be displayed.
     - The user should remain on the login page.

     ---
  
  ---

2. **E-learning Platform: Course Enrollment**

   Detailed test cases for the course enrollment functionality of an e-learning platform.

    ### Test Case Id: TC-01

    #### Test Case Title: Valid Course Enrollment

     Description:  Check that a user can enroll in a course successfully.

    Preconditions: 
    - User is logged in.
    - User is on the course enrollment page. 
    - The course selected is available and has not reached its capacity limit.

    #### Steps:
    1. Get to the course enrollment page.
    2. Select a course.
    3. Click on the enroll button.
    
    #### Expected Results: 
     - A success message should be displayed and the course should be added to the user's course list.
     - The user should be able to access the course materials immediately if applicable.
     - The course capacity should be updated accordingly, reducing by one.

     ---

    ### Test Case Id: TC-02

    #### Test Case Title: Invalid Course Enrollment

     Description:  Check that a user cannot enroll in an invalid course.

    Preconditions: 
    - User is logged in.
    - User is on the course enrollment page. 
    - The course selected is not available or has reached its capacity limit.

    #### Steps:
    1. Get to the course enrollment page.
    2. Select an invalid course.
    3. Click on the enroll button.
    
    #### Expected Results: 
     - An error message should be displayed and the user should remain on the course enrollment page.
     - The course capacity should not be updated.

     ---

     ### Test Case Id: TC-03

    #### Test Case Title: Course Capacity Limit

     Description:  Check that a user cannot enroll in a full course.

    Preconditions: 
    - User is logged in.
    - User is on the course enrollment page. 
    - The course selected is available and has reached its capacity limit.

    #### Steps:
    1. Get to the course enrollment page.
    2. Select a full course.
    3. Click on the enroll button.
    
    #### Expected Results: 
     - An error message should be displayed and the user should remain on the course enrollment page.
     - The course capacity should not be updated.

      ---

      ### Test Case Id: TC-04

    #### Test Case Title: Course Already Enrolled

     Description:  Check that a user cannot enroll in a course that they have already enrolled in.

    Preconditions: 
    - User is logged in.
    - User is on the course enrollment page. 
    - The course selected is available and has not reached its capacity limit.

    #### Steps:
    1. Get to the course enrollment page.
    2. Select a course that the user has already enrolled in.
    3. Click on the enroll button.
    
    #### Expected Results: 
     - An error message should be displayed and the user should remain on the course enrollment page.
     - The course capacity should not be updated.

      ---

      ### Test Case Id: TC-05

    #### Test Case Title: Upgrade Course

     Description:  Check that a user can upgrade their course.

    Preconditions: 
    - User is logged in.
    - User is on the course enrollment page. 
    

    #### Steps:
    1. Get to the course enrollment page.
    2. Select a course that the user has already enrolled in.
    3. Click on the upgrade button.
    
    #### Expected Results: 
     - A success message should be displayed and the course should be upgraded.
     - The users course list should represent the upgraded course.
     - The user should receive a notification that the course has been upgraded.

      ---

      ### Test Case Id: TC-06

    #### Test Case Title: Downgrade Course

     Description:  Check that a user can downgrade their course.

    Preconditions:
    - User is logged in.
    - User is on the course enrollment page. 
    - The user has an upgraded course.

    #### Steps:
    1. Get to the course enrollment page.
    2. Select a course that the user has already enrolled in.
    3. Click on the downgrade button.
    
    #### Expected Results: 
     - A success message should be displayed and the course should be downgraded.
     - The users course list should represent the downgraded course.
     - The user should receive a notification that the course has been downgraded.

      ---

      ### Test Case Id: TC-07

      #### Test Case Title: Cancel A Course

       Description:  Check that a user can cancel their course.

      Preconditions:
      - User is logged in.
      - User is on the course enrollment page. 
      - The user has an enrolled course.

      #### Steps:
      1. Get to the course enrollment page.
      2. Select a course that the user has already enrolled in.
      3. Click on the cancel button.
      
      #### Expected Results: 
       - A success message should be displayed and the course should be cancelled.
       - The users course list should not contain the cancelled course.
       - The user should receive a notification that the course has been cancelled.

      ---

  ---

3. **Banking App: Bill Payment**

  Detailed test cases for the bill payment of an online banking application.

  ### Test Case Id: TC-01

  #### Test Case Title: making a valid Bill Payment

   Description:  Check that a user can make a valid bill payment.

  Preconditions: 
  - User is logged in.
  - User is on the bill payment page.
  - The user has an account with sufficient balance.

  #### Steps:
  1. Get to the bill payment page.
  2. Enter valid account numbers.
  3. Click on the pay button.
  
  #### Expected Results: 
   - A success message should be displayed and the bill payment should be made.
   - The account balances should be updated correctly.  

   ---

   ### Test Case Id: TC-02

   #### Test Case Title: Invalid Bill Payment

    Description:  Check that a user cannot make an invalid bill payment.

   Preconditions: 
   - User is logged in.
   - User is on the bill payment page.

   #### Steps:
   1. Get to the bill payment page.
   2. Enter invalid account numbers.
   3. Click on the pay button.
   
   #### Expected Results: 
    - An error message should be displayed and the bill payment should not be made.
    - The account balances should not be updated.

     ---

    ### Test Case Id: TC-03

    #### Test Case Title: Insufficient Balance Bill Payment

     Description:  Check that a user cannot make a bill payment with insufficient balance.  

    Preconditions: 
    - User is logged in.
    - User is on the bill payment page.
    - The user has an account with insufficient balance.

    #### Steps:
    1. Get to the bill payment page.
    2. Enter valid account numbers.
    3. Click on the pay button.
    
    #### Expected Results: 
     - An error message should be displayed and the bill payment should not be made.
     - The account balances should not be updated.

      ---

    ### Test Case Id: TC-04

    #### Test Case Title: Invalid amount Bill Payment

     Description:  Check that a user cannot make a bill payment with an invalid amount.

    Preconditions: 
    - User is logged in.
    - User is on the bill payment page.

    #### Steps:
    1. Get to the bill payment page.
    2. Enter valid account numbers.
    3. Enter an invalid amount.
    4. Click on the pay button.
    
    #### Expected Results: 
     - An error message should be displayed and the bill payment should not be made.
     - The account balances should not be updated.

      ---
  ---


4. **Retail System: Discount Application**

  Detailed test cases for the discount application of a retail system.

  ### Test Case Id: TC-01

  #### Test Case Title: Valid Discount Code

   Description:  Check that a user can apply a valid discount code.

  Preconditions:
  - User is logged in.
  - User is on the discount application page.

  #### Steps:
  1. Get to the discount application page.
  2. Enter a valid discount code.
  3. Click on the apply button.
  
  #### Expected Results: 
   - A success message should be displayed and the discount should be applied.
   - The total price should reflect the applied discount.

   ---

   ### Test Case Id: TC-02

   #### Test Case Title: Invalid Discount Code

    Description:  Check that a user cannot apply an invalid discount code.

   Preconditions:
   - User is logged in.
   - User is on the discount application page.

   #### Steps:
   1. Get to the discount application page.
   2. Enter an invalid discount code.
   3. Click on the apply button.
   
   #### Expected Results: 
    - An error message should be displayed and the discount should not be applied.
    - The total price should not reflect the applied discount.

     ---

    ### Test Case Id: TC-03

    #### Test Case Title: Expired Discount Code

     Description:  Check that a user cannot apply an expired discount code.

    Preconditions:
    - User is logged in.
    - User is on the discount application page.

    #### Steps:
    1. Get to the discount application page.
    2. Enter an expired discount code.
    3. Click on the apply button.
    
    #### Expected Results: 
     - An error message should be displayed indicating that the discount code has expired or is invalid.
     - The total price should not reflect the applied discount.

      ---
  ---



5. **Chat Application: Message Sending**

  Detailed test cases for the message sending of a chat application.

  ### Test Case Id: TC-01

  #### Test Case Title: Valid text Message Sending

   Description:  Check that a user can send a valid text message.

  Preconditions:
  - User is logged in.
  - User is on the message sending page.

  #### Steps:
  1. Get to the message sending page.
  2. Enter a valid text message.
  3. Click on the send button.
  
  #### Expected Results: 
   - A success message should be displayed and the message should be sent.
   - The message should be displayed in the chat history.

   ---

   ### Test Case Id: TC-02

   #### Test Case Title: Invalid text Message Sending

    Description:  Check that a user cannot send an invalid text message.

   Preconditions:
   - User is logged in.
   - User is on the message sending page.

   #### Steps:
   1. Get to the message sending page.
   2. Enter a really long text message.
   3. Click on the send button.
   
   #### Expected Results: 
    - An error message should be displayed text message is too long.
    - The message should not be sent.
    - The message should not be displayed in the chat history.

     ---

    ### Test Case Id: TC-03

    #### Test Case Title: Image Message Sending

     Description:  Check that a user can send an image message.

    Preconditions:
    - User is logged in.
    - User is on the message sending page.

    #### Steps:
    1. Get to the message sending page.
    2. Upload an image.
    3. Click on the send button.
    
    #### Expected Results: 
     - A success message should be displayed and the image message should be sent.
     - The image should be displayed in the chat history.

      ---

    ### Test Case Id: TC-04

    #### Test Case Title: Invalid Image Type Sending

     Description:  Check that a user cannot send an invalid image message.  

    Preconditions:
    - User is logged in.
    - User is on the message sending page.

    #### Steps:
    1. Get to the message sending page.
    2. Upload an invalid image file.
    3. Click on the send button.
    
    #### Expected Results: 
     - An error message should be displayed and the image message should not be sent.
     - The image should not be displayed in the chat history.

      ---

    ### Test Case Id: TC-05

    #### Test Case Title: Video Message Sending

     Description:  Check that a user can send a video message.

    Preconditions:
    - User is logged in.
    - User is on the message sending page.

    #### Steps:
    1. Get to the message sending page.
    2. Upload a video.
    3. Click on the send button.
    
    #### Expected Results: 
     - A success message should be displayed and the video message should be sent.
     - The video should be displayed in the chat history.

      ---

    ### Test Case Id: TC-06

    #### Test Case Title: Invalid Video File Type Sending

     Description:  Check that a user cannot send an invalid video message.

    Preconditions:
    - User is logged in.
    - User is on the message sending page.

    #### Steps:
    1. Get to the message sending page.
    2. Upload an invalid video format.
    3. Click on the send button.
    
    #### Expected Results: 
     - An error message should be displayed and the video message should not be sent.
     - The video should not be displayed in the chat history.

      ---

    ### Test Case Id: TC-07

    #### Test Case Title: Text and Image Message Sending

     Description:  Check that a user can send a text and image message.

    Preconditions:
    - User is logged in.
    - User is on the message sending page.

    #### Steps:
    1. Get to the message sending page.
    2. Enter a text message and upload an image.
    3. Click on the send button.
    
    #### Expected Results: 
     - A success message should be displayed and the text and image message should be sent.
     - The text and image message should be displayed in the chat history.

      ---

    ### Test Case Id: TC-08

    #### Test Case Title: Text and Video Message Sending

     Description:  Check that a user can send a text and video message.

    Preconditions:
    - User is logged in.
    - User is on the message sending page.

    #### Steps:
    1. Get to the message sending page.
    2. Enter a text message and upload a video.
    3. Click on the send button.
    
    #### Expected Results: 
     - A success message should be displayed and the text and video message should be sent.
     - The text and video message should be displayed in the chat history.

      ---
---