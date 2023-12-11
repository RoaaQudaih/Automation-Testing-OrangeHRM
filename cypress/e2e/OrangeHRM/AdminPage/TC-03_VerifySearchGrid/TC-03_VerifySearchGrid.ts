import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchOnAdminUserAssertions from "../../../../PageObjects/OrangeHRM/searchOnAdminUser/assertions";
import searchOnAdminUserActions from "../../../../PageObjects/OrangeHRM/searchOnAdminUser/actions";
import addUserAction from "../../../../PageObjects/OrangeHRM/addUser/actions";

const addUserActions = new addUserAction();
const searchActions = new searchOnAdminUserActions();
const searchAsserts = new searchOnAdminUserAssertions();

Given("The user on the login page", () => {
  cy.login("Admin", "admin123");
});
When("The user navigate to the admin page", () => {
  addUserActions.navigateToAdminPage();
});
Then("The search grid should be appear", () => {
  searchAsserts.checkSearchGridIsExist();
});

Given("The user is on the search grid", () => {
  cy.login("Admin", "admin123");
  addUserActions.navigateToAdminPage();
});
When("The user enters a valid user name", () => {
  searchActions.typeUserNameField("Admin");
});
When("Clicks the search button", () => {
  searchActions.clickSearchButton();
});
Then("The system should given the required record", () => {
  searchAsserts.checkSearchProcessIsSuccessfully("Admin");
});

When("The user enters an invalid user name", () => {
  searchActions.typeUserNameField("Roaa");
});
Then("The system should give no record found", () => {
  searchAsserts.checkNoRecordVisibility();
});

When("Clicks the reset button", () => {
  searchActions.clickResetButton();
});
Then(
  "The system should remove the search results and reset user name field",
  () => {
    searchAsserts.checkUserNameIsReset();
  }
);

When("The user enters a valid employee name", () => {
  searchActions.enterEmployeeName("od", "Odis Adalwin");
});
Then(
  "The system should give the required record with the employee name",
  () => {
    searchAsserts.checkSearchProcessIsSuccessfully("Odis Adalwin");
  }
);

When("The user enters an valid employee name with no recored", () => {
  searchActions.enterEmployeeName("ya", "yaswanth l l");
});

Then(
  "The system should remove the search results and reset employee name field",
  () => {
    searchAsserts.checkEmployeeNameIsReset();
  }
);

When("The user clicks on the user role drop-down field", () => {
  searchActions.clickUserRoleField();
});
Then(
  "The drop-down field is clickable and should display correct options Admin & ESS",
  () => {
    searchAsserts.checkUserRoleDropDownIsExist();
  }
);

When("Select Admin option from the drop-down list", () => {
  searchActions.selectUserRole("Admin");
});
Then(
  "The selected option should be displayed on the user role drop-down field",
  () => {
    searchAsserts.selectedUserRoleIsVisible("Admin");
  }
);

Then("The system should given the required record with admin user role", () => {
  searchAsserts.checkSearchProcessIsSuccessfully("Admin");
});

When("The user selects Enabled option from the status drop-down", () => {
  searchActions.selectStatus("Enabled");
});
Then("The system should given the required record with Enabled status", () => {
  searchAsserts.selectedStatusIsVisible("Enable");
});

Then("The system should given the required record with these fields", () => {
  searchAsserts.checkCorrectResultWhenEnterAllFields(
    "Admin",
    "Eve Hill Collings",
    "Admin",
    "Enable"
  );
});
