import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchOnAdminUserAssertions from "../../../../PageObjects/OrangeHRM/AdminPage/searchOnAdminUser/assertions";
import SearchGridActions from "../../../../PageObjects/OrangeHRM/AdminPage/searchOnAdminUser/actions";
import AddUserAction from "../../../../PageObjects/OrangeHRM/AdminPage/addUser/actions";
import { USER_NAME } from "@support/shared/constant";
import { PASSWORD } from "@support/shared/constant";

const addUserActions = new AddUserAction();
const searchActions = new SearchGridActions();
const searchAsserts = new searchOnAdminUserAssertions();


Given("The user on the login page", () => {
  cy.login(USER_NAME, PASSWORD);
});

When("The user navigate to the admin page", () => {
  addUserActions.openAdminPage();
});

Then("The search grid should be appear", () => {
  searchAsserts.checkSearchGridIsExist(true);
});

Given("The user is on the search grid", () => {
  cy.login(USER_NAME, PASSWORD);
  addUserActions.openAdminPage();
});

When("The user enters a valid user name", () => {
  searchActions.typeInUserNameField("Admin");
});

When("Clicks the search button", () => {
  searchActions.clickSearchButton();
});

Then("The system should given the required record", () => {
  searchAsserts.checkSearchProcessIsSuccessfully("Admin", true);
});

When("The user enters an invalid user name", () => {
  searchActions.typeInUserNameField("Roaa");
});

Then("The system should give no record found", () => {
  searchAsserts.checkNoRecordIsVisible(true);
});

When("Clicks the reset button", () => {
  searchActions.clickResetButton();
});

Then(
  "The system should remove the search results and reset user name field",
  () => {
    searchAsserts.checkUserNameIsReset(false);
  }
);

When("The user enters a valid employee name", () => {
  searchActions.typeInEmployeeNameField("LPNZHdaaER zfFpDKrldH");
});

Then(
  "The system should give the required record with the employee name",
  () => {
    searchAsserts.checkSearchProcessIsSuccessfully("LPNZHdaaER zfFpDKrldH", true);
  }
);

When("The user enters an valid employee name with no recored", () => {
  searchActions.typeInEmployeeNameField("Eloise Patience Erdman");
});

Then(
  "The system should remove the search results and reset employee name field",
  () => {
    searchAsserts.checkEmployeeNameIsReset(false);
  }
);

When("The user clicks on the user role drop-down field", () => {
  searchActions.clickUserRoleField();
});

Then(
  "The drop-down field is clickable and should display correct options Admin & ESS",
  () => {
    searchAsserts.checkDropdownIsExist(true);
  }
);

When("Select Admin option from the drop-down list", () => {
  searchActions.selectUserRole("Admin");
});

Then(
  "The selected option should be displayed on the user role drop-down field",
  () => {
    searchAsserts.selectOptionIsVisible("User Role","Admin", true);
  }
);

Then("The system should given the required record with admin user role", () => {
  searchAsserts.checkSearchProcessIsSuccessfully("Admin", true);
});

When("The user selects Enabled option from the status drop-down", () => {
  searchActions.selectStatus("Enable");
});

Then("The system should given the required record with Enabled status", () => {
  searchAsserts.selectOptionIsVisible("Status","Enable", true);
});

Then("The system should given the required record with these fields", () => {
  searchAsserts.checkCorrectResultWhenEnterAllFields(
    "Admin",
    "LPNZHdaaER zfFpDKrldH",
    "Admin",
    "Enable",
    true
  );
});
