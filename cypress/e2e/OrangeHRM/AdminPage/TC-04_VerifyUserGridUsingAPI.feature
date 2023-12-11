Feature: Admin users grid functionality
   
  Scenario: #1 Verify the edit icon 
    Given The user is on user grid
    When The user clicks on the Edit icon for the required user
    Then The user should be directed to the user's edit page
    
  Scenario: #2 Edit the user role for the user 
    Given The user is on the user grid
    When The user clicks on the Edit icon for the required user
    And The user edit the user role  field
    And Clicks save button
    Then The user should be redirected to the Admin page
  
  # Scenario: #1 Verify the delete icon 
  #   Given The user is on user grid
  #   When The user clicks on the delete icon for the required user
  #   Then The user should be deleted from the user grid