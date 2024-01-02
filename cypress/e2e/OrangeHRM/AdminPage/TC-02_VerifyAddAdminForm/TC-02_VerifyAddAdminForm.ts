import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import AddUserAction from "../../../../PageObjects/OrangeHRM/AdminPage/addUser/actions";
import AddUserAssertions from "../../../../PageObjects/OrangeHRM/AdminPage/addUser/assertions";
import UserDataUtils from "../../../../PageObjects/OrangeHRM/AdminPage/userGrid/dataUtils";
import { getUser } from "@support/adminPage/dataFakers";
import { USER_NAME } from "@support/shared/constant";
import { PASSWORD } from "@support/shared/constant";
import { getEmployee } from "@support/employeePage/dataFakers";
import { getEmployeeLoginDetail } from "@support/employeePage/dataFakers";
import EmplyeePageDataUtils from "cypress/PageObjects/OrangeHRM/EmployeePage/dataUtils";

const addUser = new UserDataUtils();
const addUserActions = new AddUserAction();
const addUserAsserts = new AddUserAssertions();
const addEmployee = new EmplyeePageDataUtils();

let LoginDetail=getEmployeeLoginDetail();
let newEmployee = getEmployee();
let newUser = getUser();
let employeeNumber

before(() => {
  addEmployee.createNewEmployee(newEmployee)
  // .then((empNumber) => {
  //   employeeNumber=empNumber
  //   addEmployee.createLoginDetails({
  //     ...LoginDetail,
  //     empNumber: empNumber,
  //   });
  // });
});

Given("The user logins and navigates to the admin page", () => {
  cy.login(USER_NAME, PASSWORD);
  addUserActions.openAdminPage();
});
When("The user clicks on the add button", () => {
  addUserActions.clickAddButton();
});
Then("The system should redirected the user to the add form", () => {
  addUserAsserts.checkAddUserPageIsOpen();
});

Given("The user on the add form", () => {
  cy.login(USER_NAME, PASSWORD);
  addUserActions.openAdminPage().clickAddButton();
});

When("The user clicks on the cancel button", () => {
  addUserActions.clickCancelButton();
});
Then("The system should redirected the user to the admin page", () => {
  addUserAsserts.checkAdminPageIsOpen();
});

When("The user clicks on the user role drop-down field", () => {
  addUserActions.clickDropdownField("User Role");
});
Then(
  "The user role drop-down field is clickable and Should display correct options Admin & ESS",
  () => {
    addUserAsserts.checkDropdownListIsVisible(true);
  }
);

When("The user clicks on the status drop-down field", () => {
  addUserActions.clickDropdownField("Status");
});
Then(
  "The status drop-down field is clickable and should display correct options Enabled & Disabled",
  () => {
    addUserAsserts.checkDropdownListIsVisible(true);
  }
);

When("Select Admin option from the user role drop-down list", () => {
  addUserActions.selectOptionFromListboxDropdown("Admin");
});
Then(
  "The selected option Admin should be displayed on the user role drop-down field",
  () => {
    addUserAsserts.checkOptionIsSelected("Admin", true);
  }
);

When("Select Enabled option from the status drop-down list", () => {
  addUserActions.selectOptionFromListboxDropdown("Enabled");
});
Then(
  "The selected option Enabled should be displayed on the status drop-down field",
  () => {
    addUserAsserts.checkOptionIsSelected("Enabled", true);
  }
);

When("The user enters a user name with length less than 5 characters", () => {
  addUserActions.typeInUserNameInputField("Roaa");
});
Then(
  "The system should reject the input and display an error message explaining the user name requirements",
  () => {
    addUserAsserts.checkErrorMessageIsExist(
      "Should be at least 5 characters",
      true
    );
  }
);

const text = Array.from({ length: 44 }).fill(1).join("");
When("The user enters a user name with length more than 40 characters", () => {
  addUserActions.typeInUserNameInputField(text);
});
Then(
  "The system should reject the Long input and display an error message explaining the password requirements",
  () => {
    addUserAsserts.checkErrorMessageIsExist(
      "Should not exceed 40 characters",
      true
    );
  }
);

When(
  "The user enters a user name with valid length between 5 and 40 characters",
  () => {
    addUserActions.typeInUserNameInputField("Rashed4");
  }
);
Then("The system should accept the user name input", () => {
  addUserAsserts.acceptUserName("Rashed4");
});

When("The user enters a password with length less than 7 characters", () => {
  addUserActions.typeInPasswordInputField("roaa1");
});
Then(
  "The system should reject the short input and display a message explaining the password requirements",
  () => {
    addUserAsserts.checkErrorMessageIsExist(
      "Should have at least 7 characters",
      true
    );
  }
);

const text2 = Array.from({ length: 66 }).fill(1).join("");
When("The user enters a password with length more than 64 characters", () => {
  addUserActions.typeInPasswordInputField(text2);
});
Then(
  "The system should reject the long input and display a message explaining the password requirements",
  () => {
    addUserAsserts.checkErrorMessageIsExist(
      "Should not exceed 64 characters",
      true
    );
  }
);

When(
  "The user enters a password within a valid length range with only letters",
  () => {
    addUserActions.typeInPasswordInputField("roaaqudaih");
  }
);
Then(
  "The system should reject the input and display a message explaining the password requirements",
  () => {
    addUserAsserts.checkErrorMessageIsExist(
      "Your password must contain minimum 1 number",
      true
    );
  }
);

When(
  "The user enters a password within a valid length range with only symbols",
  () => {
    addUserActions.typeInPasswordInputField("@#@#@#@#");
  }
);
Then(
  "The system should reject the symbol input and display a message explaining the password requirements",
  () => {
    addUserAsserts.checkErrorMessageIsExist(
      "Your password must contain minimum 1 lower-case letter",
      true
    );
  }
);

When(
  "The user enters a password within a valid length range with only numbers",
  () => {
    addUserActions.typeInPasswordInputField("12345678");
  }
);
Then(
  "The system should reject the number input and display a message explaining the password requirements",
  () => {
    addUserAsserts.checkErrorMessageIsExist(
      "Your password must contain minimum 1 lower-case letter",
      true
    );
  }
);

When(
  "The user enters a password within a valid length range with letter, numbers and symbols",
  () => {
    addUserActions.typeInPasswordInputField("Roaa@12345@");
  }
);
Then("The system should accept the password input", () => {
  addUserAsserts.acceptPassword("Roaa@12345@");
});

When(
  "The user enters a valid password and enters the same password in confirm password field",
  () => {
    addUserActions.typeInPasswordInputField("Roaa@12345@");
    addUserActions.typeInConfirmPasswordInputField("Roaa@12345@");
  }
);
Then("The system should accept the input", () => {
  addUserAsserts.checkErrorMessageIsExist("Passwords do not match", false);
});

When("The user enters a valid password", () => {
  addUserActions.typeInPasswordInputField("Roaa@12345@");
});
When("Enters another password in confirm password field", () => {
  addUserActions.typeInConfirmPasswordInputField("Roaa12345");
});
Then(
  "The system should reject the input and display an error message that passwords not match",
  () => {
    addUserAsserts.checkErrorMessageIsExist("Passwords do not match", true);
  }
);

When("The user enters invalid employee", () => {
  addUserActions.typeInEmployeeNameInputField("RoaaQudaih");
});
Then("The system should reject the input and display invalid message", () => {
  addUserAsserts.rejectEmployeeName();
});

When("The user enters valid employee", () => {
  addUserActions
    .typeInEmployeeNameInputField("Cecil Bonaparte")
    .selectOptionFromListboxDropdown("Cecil Bonaparte");
});
Then("The system should accept the input and display the employee name", () => {
  addUserAsserts.checkErrorMessageIsExist("Invalid", false);
});

When("Clicks on the save button", () => {
  addUserActions.clickSaveButton();
});
When("The user create new acount", () => {
  // addUser.createNewUser(newUser)
  addUser.createNewUser({...newUser,empNumber:employeeNumber});
});
Then(
  "The system should display a message indicating the regester was successful",
  () => {
    addUserAsserts.checkUserIsExistInUserGrid(newUser.username, true);
  }
);

When("The user enters a user name that already exists", () => {
  addUserActions.typeInUserNameInputField("Admin");
});
Then(
  "The system should reject and display an error message that user name already exists",
  () => {
    addUserAsserts.checkErrorMessageIsExist("Already exists", true);
  }
);

When("The user enters user role {string}", (userRole: string) => {
  if (userRole === "Admin") {
    addUserActions.clickDropdownField("User Role");
    addUserActions.selectOptionFromListboxDropdown("Admin");
  }
});
When("The user enters employee name {string}", (employeeName: string) => {
  if (employeeName !== " ") {
    addUserActions
      .typeInEmployeeNameInputField(employeeName)
      .selectOptionFromListboxDropdown(employeeName);
  }
});
When("The user enters status {string}", (status: string) => {
  if (status === "Enabled") {
    addUserActions.clickDropdownField("Status");
    addUserActions.selectOptionFromListboxDropdown("Enabled");
  }
});
When("The user enters user name {string}", (userName: string) => {
  addUserActions.typeInUserNameInputField(userName);
});
When("The user enters password {string}", (password: string) => {
  addUserActions.typeInPasswordInputField(password);
});
When("The user enters confirm password {string}", (confirmPassword: string) => {
  addUserActions.typeInConfirmPasswordInputField(confirmPassword);
});
Then(
  "The system should display error message for required empty fields",
  () => {
    addUserAsserts.checkErrorMessageIsExist("Required", true);
  }
);

after(() => {
   addUser.deleteUserByName(newUser.username);  
});
