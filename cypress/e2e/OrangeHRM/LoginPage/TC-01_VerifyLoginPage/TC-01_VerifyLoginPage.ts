import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPageAction from "../../../../PageObjects/OrangeHRM/loginPage/actions";
import LoginPageAssertions from "../../../../PageObjects/OrangeHRM/loginPage/assertions";
import { USER_NAME } from "@support/shared/constant";
import { PASSWORD } from "@support/shared/constant";

const loginPageAction = new LoginPageAction();
const loginPageAsserts = new LoginPageAssertions();

Given("The user is on the login page", () => {
  loginPageAction.visit();
});

When("The user enters correct uesrname", () => {
  loginPageAction.typeInUserNameInputField(USER_NAME);
});

When("The user enters correct password", () => {
  loginPageAction.typeInPasswordField(PASSWORD);
});

When("Clicks the login button", () => {
  loginPageAction.clickLoginButton();
});

Then("The system should redirected the user to the dashboard", () => {
  loginPageAsserts.checkDashboardPageIsOpen(true);
});

When("The user enters uesrname {string}", (username: string) => {
  loginPageAction.typeInUserNameInputField(username);
});
When("The user enters password {string}", (password: string) => {
  loginPageAction.typeInPasswordField(password);
});
Then("The system should given an error message and reset the field", () => {
  loginPageAsserts.checkErrorMsgIsAppeare();
});

Then("The system should given an required message", () => {
  loginPageAsserts.checkRequiredMsgIsAppeare();
});

When("The user leaves the username field empty", () => {
  loginPageAction.typeInUserNameInputField(" ");
});

Then(
  "The system should display required message for the username field",
  () => {
    loginPageAsserts.checkRequiredMsgIsAppeare();
  }
);

When("The user leaves the password field empty", () => {
  loginPageAction.typeInPasswordField(" ");
});

Then(
  "The system should display required message for the password field",
  () => {
    loginPageAsserts.checkRequiredMsgIsAppeare();
  }
);

When("The user clicks on 'forget you password?' link", () => {
  loginPageAction.clickOnForgotPasswordLink();
});

Then("The system should redirected to the reset password page", () => {
  loginPageAsserts.redirectToResetPage();
});
