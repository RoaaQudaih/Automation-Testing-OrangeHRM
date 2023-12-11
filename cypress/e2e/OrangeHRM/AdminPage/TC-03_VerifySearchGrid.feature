Feature: User search functionality-to search about users
   
Scenario: #1- Verify the search grid is exist
    Given The user on the login page
    When The user navigate to the admin page
    Then The search grid should be appear

Scenario: #2- Verify that the system can successfully search for a user by valid user name 
    Given The user is on the search grid 
    When The user enters a valid user name 
    And Clicks the search button
    Then The system should given the required record

Scenario: #3- Verify that the system can successfully search for a user by invalid user name 
    Given The user is on the search grid 
    When The user enters an invalid user name 
    And Clicks the search button
    Then The system should give no record found
    
Scenario: #4- Verify that the system can reset the user name field 
    Given The user is on the search grid 
    When The user enters a valid user name 
    And Clicks the search button
    And Clicks the reset button
    Then The system should remove the search results and reset user name field

Scenario: #5 Verify that the system can successfully search for a user by valid employee name 
    Given The user is on the search grid 
    When The user enters a valid employee name
    And Clicks the search button
    Then The system should give the required record with the employee name


Scenario: #6 Verify that the system can successfully search for a user by invalid employee name 
    Given The user is on the search grid 
    When The user enters an valid employee name with no recored 
    And Clicks the search button
    Then The system should give no record found 
    
Scenario: #7 Verify that the system can reset the employee name field 
    Given The user is on the search grid 
    When The user enters a valid employee name
    And Clicks the search button
    And Clicks the reset button
    Then The system should remove the search results and reset employee name field

Scenario: #8 Verify the user role drop-down field on the regesteration form 
        Given The user is on the search grid
        When The user clicks on the user role drop-down field  
        Then The drop-down field is clickable and should display correct options Admin & ESS

Scenario: #9 Verify select option from the user role drop-down field
        Given The user is on the search grid 
        When The user clicks on the user role drop-down field  
        And  Select Admin option from the drop-down list  
        Then The selected option should be displayed on the user role drop-down field 

Scenario: #10 Verify that the system can successfully search for a user by "Admin" option from the user role drop-down  
        Given The user is on the search grid
        When The user clicks on the user role drop-down field  
        And  Select Admin option from the drop-down list  
        And Clicks the search button
        Then The system should given the required record with admin user role  

Scenario: #11 Verify that the system can successfully search for a user by "Enabled" option from the status drop-down  
        Given The user is on the search grid
        When The user selects Enabled option from the status drop-down 
        And Clicks the search button
        Then The system should given the required record with Enabled status  

Scenario: #12 Verify that the system can successfully search for a user by using all field  
        Given The user is on the search grid
        When The user enters a valid user name
        And The user selects Enabled option from the status drop-down
        And The user clicks on the user role drop-down field  
        And Select Admin option from the drop-down list
        And The user enters a valid employee name
        And Clicks the search button
        Then The system should given the required record with these fields 