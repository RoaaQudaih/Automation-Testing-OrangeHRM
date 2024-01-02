Feature: Add user form-create a new  account So I can access the application
  
  # Scenario: #1 Verify Add button
  #   Given The user logins and navigates to the admin page
  #   When The user clicks on the add button
  #   Then The system should redirected the user to the add form 
  
  # Scenario: #2 Verify cancel button
  #   Given The user on the add form
  #   When The user clicks on the cancel button
  #   Then The system should redirected the user to the admin page
  
  # Scenario: #3 Verify the user role drop-down field on the add form
  #   Given The user on the add form
  #   When The user clicks on the user role drop-down field  
  #   Then The user role drop-down field is clickable and Should display correct options Admin & ESS

  # Scenario: #4 Verify the status drop-down field on the add form
  #   Given The user on the add form 
  #   When The user clicks on the status drop-down field    
  #   Then The status drop-down field is clickable and should display correct options Enabled & Disabled

  # Scenario: #5 Verify select option from the user role drop-down field
  #   Given The user on the add form 
  #   When The user clicks on the user role drop-down field   
  #   And  Select Admin option from the user role drop-down list  
  #   Then The selected option Admin should be displayed on the user role drop-down field 
  
  # Scenario: #6 Verify select option from the status drop-down field
  #   Given The user on the add form 
  #   When The user clicks on the status drop-down field  
  #   And Select Enabled option from the status drop-down list  
  #   Then The selected option Enabled should be displayed on the status drop-down field 
    
  # Scenario: #7 User name length validation when the user name is too short
  #   Given The user on the add form  
  #   When The user enters a user name with length less than 5 characters
  #   Then The system should reject the input and display an error message explaining the user name requirements
    
  # Scenario: #8 User name length validation when the user name is too large
  #   Given The user on the add form 
  #   When The user enters a user name with length more than 40 characters
  #   Then The system should reject the Long input and display an error message explaining the password requirements
    
  # Scenario: #9 User name length validation when the user name is within the valid length range
  #   Given The user on the add form
  #   When The user enters a user name with valid length between 5 and 40 characters 
  #   Then The system should accept the user name input
 
  # Scenario: #10 password length validation when it is too short
  #   Given The user on the add form  
  #   When The user enters a password with length less than 7 characters
  #   Then The system should reject the short input and display a message explaining the password requirements
  
  # Scenario: #11 Password length validation when it is too long
  #   Given The user on the add form   
  #   When The user enters a password with length more than 64 characters
  #   Then The system should reject the long input and display a message explaining the password requirements
    
  # Scenario: #12 Verify very weak password with only letters
  #   Given The user on the add form
  #   When The user enters a password within a valid length range with only letters
  #   Then The system should reject the input and display a message explaining the password requirements
    
  # Scenario: #13 Verify very weak password with only symbols
  #   Given The user on the add form 
  #   When The user enters a password within a valid length range with only symbols
  #   Then The system should reject the symbol input and display a message explaining the password requirements
  
  # Scenario: #14 Verify very weak password with only numbers
  #   Given The user on the add form 
  #   When The user enters a password within a valid length range with only numbers
  #   Then The system should reject the number input and display a message explaining the password requirements
  
  # Scenario: #15 Verify strong password
  #   Given The user on the add form  
  #   When The user enters a password within a valid length range with letter, numbers and symbols
  #   Then The system should accept the password input

  # Scenario: #16 Confirm password field validation with matching password
  #   Given The user on the add form  
  #   When The user enters a valid password and enters the same password in confirm password field
  #   Then The system should accept the input
   
  # Scenario: #17 Confirm password field validation with not matching password
  #   Given The user on the add form  
  #   When The user enters a valid password
  #   And Enters another password in confirm password field
  #   Then The system should reject the input and display an error message that passwords not match
  
  # Scenario: #18 Verify the employee name field validation with invalid employee
  #   Given The user on the add form
  #   When The user enters invalid employee
  #   Then The system should reject the input and display invalid message

  # Scenario: #19 Verify the employee name field validation with valid employee
  #   Given The user on the add form
  #   When The user enters valid employee
  #   Then The system should accept the input and display the employee name 

  # @focus
  Scenario: #20 Successful user addtion
    Given The user logins and navigates to the admin page  
    When The user create new acount
    Then The system should display a message indicating the regester was successful
  
  
  # Scenario: #21 User exists validation
  #   Given The user on the add form  
  #   When The user enters a user name that already exists
  #   Then The system should reject and display an error message that user name already exists

  # Scenario Outline: #22- Verify the validation for required fields
  #   Given The user on the add form   
  #   When The user enters user role <User Role>
  #   And The user enters employee name <Employee Name>
  #   And The user enters status <Status>
  #   And The user enters user name <Username>
  #   And The user enters password <Password>
  #   And The user enters confirm password <Confirm Password>
  #   And Clicks on the save button
  #   Then The system should display error message for required empty fields

  # Examples:
  #     | User Role| Employee Name      |Status    |Username|Password  |Confirm Password|
  #     | "Admin"  | "Cecil Bonaparte"  |"Enabled" |"Roaaa" |"roaa1234"|" "             |
  #     | "Admin"  | "Cecil Bonaparte"  |"Enabled" |" "     |"roaa1234"|"roaa1234"      |
  #     | "Admin"  | " "                |"Enabled" |"Roaaa" |"roaa1234"|"roaa1234"      |
  #     | " "      | "Cecil Bonaparte"  |"Enabled" |"Roaaa" |"roaa1234"|"roaa1234"      |
  #     | "Admin"  | "Cecil Bonaparte"  |    " "   |"Roaaa" |"roaa1234"|"roaa1234"      |
  #     | "Admin"  | "Cecil Bonaparte"  |"Enabled" |"Roaaa" |" "       |"roaa1234"      |
   