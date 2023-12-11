import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import addUserAction from "../../../../PageObjects/OrangeHRM/addUser/actions";
import addUserAssertions from "../../../../PageObjects/OrangeHRM/addUser/assertions";
import addUserDataUtils from "../../../../PageObjects/OrangeHRM/userGrid/dataUtils";
import { user } from "../../../../PageObjects/OrangeHRM/addUser/createDataType";
const addUser = new addUserDataUtils();
const addUserActions = new addUserAction();
const addUserAsserts = new addUserAssertions();
let User: user = {
  username: "RoaaQudaih",
  password: "roaa1234",
  status: true,
  userRoleId: 1,
  empNumber: 7,
};

Given("The user logins and navigates to the admin page", () => {
  cy.login("Admin", "admin123");
  addUserActions.navigateToAdminPage();
});
When("The user clicks on the add button", () => {
  addUserActions.clickAddButton();
});
Then("The system should redirected the user to the add form", () => {
  addUserAsserts.redirectedToTheAddForm();
});

Given("The user on the add form", () => {
  cy.login("Admin", "admin123");
  addUserActions.navigateToAdminPage().clickAddButton();
});

When("The user clicks on the cancel button", () => {
  addUserActions.clickCancelButton();
});
Then("The system should redirected the user to the admin page", () => {
  addUserAsserts.redirectedToTheAdminPaage();
});

When("The user clicks on the user role drop-down field", () => {
  addUserActions.clickUserRoleField();
});
Then(
  "The user role drop-down field is clickable and Should display correct options Admin & ESS",
  () => {
    addUserAsserts.checkDropDownListVisibility();
  }
);

When("The user clicks on the status drop-down field", () => {
  addUserActions.clickStatusField();
});
Then(
  "The status drop-down field is clickable and should display correct options Enabled & Disabled",
  () => {
    addUserAsserts.checkDropDownListVisibility();
  }
);

When("Select Admin option from the user role drop-down list", () => {
  addUserActions.selectUserRole("Admin");
});
Then(
  "The selected option Admin should be displayed on the user role drop-down field",
  () => {
    addUserAsserts.displayedSelectedUserRole("Admin");
  }
);

When("Select Enabled option from the status drop-down list", () => {
  addUserActions.selectStatus("Enabled");
});
Then(
  "The selected option Enabled should be displayed on the user role drop-down field",
  () => {
    addUserAsserts.displayedSelectedStatus("Enabled");
  }
);

When("The user enters a user name with length less than 5 characters", () => {
  addUserActions.enterUserName("Roaa");
});
Then(
  "The system should reject the input and display an error message explaining the user name requirements",
  () => {
    addUserAsserts.rejectShortUserName();
  }
);

When("The user enters a user name with length more than 40 characters", () => {
  addUserActions.enterUserName(
    "qwerqrrrrqqtqy5678uji9sbvfgrt54e3w2qsdfghjkkbbv"
  );
});
Then(
  "The system should reject the Long input and display an error message explaining the password requirements",
  () => {
    addUserAsserts.rejectLongUserName();
  }
);

When(
  "The user enters a user name with valid length between 5 and 40 characters",
  () => {
    addUserActions.enterUserName("Rashed4");
  }
);
Then("The system should accept the user name input", () => {
  addUserAsserts.acceptUserName("Rashed4");
});

When("The user enters a password with length less than 7 characters", () => {
  addUserActions.typeInPasswordField("roaa1");
});
Then(
  "The system should reject the short input and display a message explaining the password requirements",
  () => {
    addUserAsserts.rejectShortPassword();
  }
);

When("The user enters a password with length more than 64 characters", () => {
  addUserActions.typeInPasswordField(
    "we3e12fdddhhhhhnnbjkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhvvvvvvvvvvvvvvdddddddddddssssssssssssssssssssseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees"
  );
});
Then(
  "The system should reject the long input and display a message explaining the password requirements",
  () => {
    addUserAsserts.rejectLongPassword();
  }
);

When(
  "The user enters a password within a valid length range with only letters",
  () => {
    addUserActions.typeInPasswordField("roaaqudaih");
  }
);
Then(
  "The system should reject the input and display a message explaining the password requirements",
  () => {
    addUserAsserts.rejectJustLetterPassword();
  }
);

When(
  "The user enters a password within a valid length range with only symbols",
  () => {
    addUserActions.typeInPasswordField("@#@#@#@#");
  }
);
Then(
  "The system should reject the symbol input and display a message explaining the password requirements",
  () => {
    addUserAsserts.rejectPassword();
  }
);

When(
  "The user enters a password within a valid length range with only numbers",
  () => {
    addUserActions.typeInPasswordField("12345678");
  }
);
Then(
  "The system should reject the number input and display a message explaining the password requirements",
  () => {
    addUserAsserts.rejectPassword();
  }
);

When(
  "The user enters a password within a valid length range with letter, numbers and symbols",
  () => {
    addUserActions.typeInPasswordField("Roaa@12345@");
  }
);
Then("The system should accept the password input", () => {
  addUserAsserts.acceptPassword("Roaa@12345@");
});

When(
  "The user enters a valid password and enters the same password in confirm password field",
  () => {
    addUserActions.typeInPasswordField("Roaa@12345@");
    addUserActions.typeInConfirmPasswordField("Roaa@12345@");
  }
);
Then("The system should accept the input", () => {
  addUserAsserts.acceptConfirmPassword();
});

When("The user enters a valid password", () => {
  addUserActions.typeInPasswordField("Roaa@12345@");
});
When("Enters another password in confirm password field", () => {
  addUserActions.typeInConfirmPasswordField("Roaa12345");
});
Then(
  "The system should reject the input and display an error message that passwords not match",
  () => {
    addUserAsserts.rejectConfirmPassword();
  }
);

When("The user enters invalid employee", () => {
  addUserActions.typeInEmployeeNameField("RoaaQudaih", false);
});
Then("The system should reject the input and display invalid message", () => {
  addUserAsserts.rejectEmployeeName();
});

When("The user enters valid employee", () => {
  addUserActions.typeInEmployeeNameField("Cecil Bonaparte", true);
});
Then("The system should accept the input and display the employee name", () => {
  addUserAsserts.displayEmployeeName();
});

When("Clicks on the save button", () => {
  addUserActions.clickSaveButton();
});
When("The user create new acount", () => {
  addUser.createNewUser(User);
});
Then(
  "The system should display a message indicating the regester was successful",
  () => {
    addUserAsserts.successfulAddUser(User.username);
  }
);

When("The user enters a user name that already exists", () => {
  addUserActions.enterUserName("Admin");
});
Then(
  "The system should reject and display an error message that user name already exists",
  () => {
    addUserAsserts.rejectExistUserName();
  }
);

When("The user enters user role {string}", (userRole: string) => {
  if (userRole === "Admin") {
    addUserActions.clickUserRoleField();
    addUserActions.selectUserRole("Admin");
  }
});
When("The user enters employee name {string}", (employeeName: string) => {
  if (employeeName !== " ") {
    addUserActions.typeInEmployeeNameField(employeeName, true);
  }
});
When("The user enters status {string}", (status: string) => {
  if (status === "Enabled") {
    addUserActions.clickStatusField();
    addUserActions.selectStatus("Enabled");
  }
});
When("The user enters user name {string}", (userName: string) => {
  addUserActions.enterUserName(userName);
});
When("The user enters password {string}", (password: string) => {
  addUserActions.typeInPasswordField(password);
});
When("The user enters confirm password {string}", (confirmPassword: string) => {
  addUserActions.typeInConfirmPasswordField(confirmPassword);
});
Then(
  "The system should display error message for required empty fields",
  () => {
    addUserAsserts.requiredField();
  }
);
