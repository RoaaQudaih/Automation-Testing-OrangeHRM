import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import addUserAction from "../../../../PageObjects/OrangeHRM/addUser/actions";
import { user } from "../../../../PageObjects/OrangeHRM/addUser/createDataType";
import addUserDataUtils from "../../../../PageObjects/OrangeHRM/userGrid/dataUtils";
import userGridAction from "../../../../PageObjects/OrangeHRM/userGrid/actions";
import userGridAssertions from "../../../../PageObjects/OrangeHRM/userGrid/assertions";

const userGridAsserts = new userGridAssertions();
const addUser = new addUserDataUtils();
const addUserActions = new addUserAction();
const userGridActions = new userGridAction();
let User: user = {
  username: "Roa'Qudaih",
  password: "roaa1234",
  status: true,
  userRoleId: 1,
  empNumber: 7,
};

before(() => {
  cy.login("Admin", "admin123");
  addUser.createNewUser(User);
  //addUser.changeDetals(User);
});
Given("The user is on user grid", () => {
  addUserActions.navigateToAdminPage();
});
When("The user clicks on the Edit icon for the required user", () => {
  userGridActions.clickEditIcon(User.username);
});
Then("The user should be directed to the user's edit page", () => {
  userGridAsserts.checkEditUserVisibility();
});
Given("The user is on the user grid", () => {
  cy.login("Admin", "admin123");
  addUserActions.navigateToAdminPage();
});
When("The user edit the user role  field", () => {
  userGridActions.editUserRoleField(User.userRoleId);
});
When("Clicks save button", () => {
  userGridActions.clickSaveButton();
});
Then("The user should be redirected to the Admin page", () => {
  userGridAsserts.successfulEdit(User.username, User.userRoleId);
});

after(() => {
  addUser.deleteUserByName(User.username);
});
// When("The user clicks on the delete icon for the required user",()=>{
//   addUser.deleteUserByName(User.username)
// })
// Then("The user should be deleted from the user grid",()=>{
//   userGridAsserts.successDeleted(User.username);
// })
