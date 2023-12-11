Feature: login page-to login and access my acount
  
Background: Login to Orange HRM website
Given The user is on the login page

Scenario: #1 User successfully logs in and is redirected to the dashboard    
  When The user enters correct uesrname 
  And The user enters correct password
  And Clicks the login button
  Then The system should redirected the user to the dashboard

Scenario Outline: #2 Failed login with username <username> and password <password>  
  When The user enters uesrname <username>
  And The user enters password <password>
  And Clicks the login button
  Then The system should given an error message and reset the field

  Examples:
      | username | password    |
      | "Admin"  | "admin111"  |
      |"Roaa"    | "roaa123"   |
      |"Roaa"    |"admin123"   |

Scenario: #3 Check the required for the username field    
  When The user leaves the username field empty
  And The user enters correct password
  And Clicks the login button
  Then The system should display required message for the username field

Scenario: #4 Check the required for the password field    
  When The user enters correct uesrname
  And The user leaves the password field empty
  And Clicks the login button
  Then The system should display required message for the password field

Scenario: #5 User need to reset password
  When The user clicks on 'forget you password?' link 
  Then The system should redirected to the reset password page
     