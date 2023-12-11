Feature: Add Employee Functionality

Scenario: #1 Verify add Employee
  Given The user is on the Add Employee form
  When The user add employee with login details
  Then The system should successfully add the employee and redirected to the employee list page