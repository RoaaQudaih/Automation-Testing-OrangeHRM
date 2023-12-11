Feature: Leave Page- for employee to apply leaves

Scenario: Employee apply leave
Given The system has an Employee with Login Details
And The employee has number of entitlement
When The employee login to the system
And The employee requests a leave day in the future
And The admin login to the system
And The admin approves the leave request
And The employee login to the system
And Open the My Leave page
Then The leave should exist in the records table with status Scheduled