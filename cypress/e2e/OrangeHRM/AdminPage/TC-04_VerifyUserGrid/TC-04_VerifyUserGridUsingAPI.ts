import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AddUserAction from "../../../../PageObjects/OrangeHRM/AdminPage/addUser/actions";
import { getUser } from "@support/adminPage/dataFakers";
import UserDataUtils from "../../../../PageObjects/OrangeHRM/AdminPage/userGrid/dataUtils";
import userGridAction from "../../../../PageObjects/OrangeHRM/AdminPage/userGrid/actions";
import userGridAssertions from "../../../../PageObjects/OrangeHRM/AdminPage/userGrid/assertions";
import { USER_NAME } from "@support/shared/constant";
import { PASSWORD } from "@support/shared/constant";

const userGridAsserts = new userGridAssertions();
const addUser = new UserDataUtils();
const addUserActions = new AddUserAction();
const userGridActions = new userGridAction();
let newUser = getUser();
let userId

before(() => {
  cy.login(USER_NAME, PASSWORD);
  addUser.createNewUser(newUser).then((response)=>{
    userId=response
  })
  //addUser.changeDetals(User);
});

Given("The user is on user grid", () => {
  addUserActions.openAdminPage();
});

When("The user clicks on the Edit icon for the required user", () => {
  userGridActions.clickEditIcon(newUser.username);
});

Then("The user should be directed to the user's edit page", () => {
  userGridAsserts.checkEditUserFormIsVisible(true);
});

Given("The user is on the user grid", () => {
  cy.login(USER_NAME, PASSWORD);
  addUserActions.openAdminPage();
});

When("The user edit the user role  field", () => {
  userGridActions.editUserRoleField(newUser.userRoleId);
});

When("Clicks save button", () => {
  userGridActions.clickSaveButton();
});

Then("The user should be redirected to the Admin page", () => {
  userGridAsserts.checkEditIsVisible(newUser.username, newUser.userRoleId);
});

after(() => {
  addUser.deleteUserByName(userId);
});

// When("The user clicks on the delete icon for the required user",()=>{
//   addUser.deleteUserByName(User.username)
// })
// Then("The user should be deleted from the user grid",()=>{
//   userGridAsserts.successDeleted(User.username);
// })
