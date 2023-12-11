import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import EmplyeePageDataUtils from "../../../../PageObjects/OrangeHRM/EmployeePage/dataUtils";
import { EmployeeLoginDetail } from "../../../../PageObjects/OrangeHRM/EmployeePage/createDataType";
import { Employeebody } from "../../../../PageObjects/OrangeHRM/EmployeePage/createDataType";
const randomId = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
import { Entitlements } from "../../../../PageObjects/OrangeHRM/leavePage/createDataType";
import LeavePageDataUtils from "../../../../PageObjects/OrangeHRM/leavePage/dataUtils";
import addEmployeeActions from "../../../../PageObjects/OrangeHRM/EmployeePage/actions";
import { Leave } from "../../../../PageObjects/OrangeHRM/leavePage/createDataType";
import leaveActions from "../../../../PageObjects/OrangeHRM/leavePage/actions";
import leaveAssertions from "../../../../PageObjects/OrangeHRM/leavePage/assertions";

let employeeNumber: string;
const addEmployee = new EmplyeePageDataUtils();
const leaveAssert = new leaveAssertions();
const leaveAction = new leaveActions();
const employeeAction = new addEmployeeActions();
const leave = new LeavePageDataUtils();

let Employee: Employeebody = {
  firstName: "Rashed",
  middleName: "Anwar",
  lastName: "Daraghmeh",
  employeeId: randomId.toString(),
};
let LoginDetail: EmployeeLoginDetail = {
  empNumber: employeeNumber,
  password: "rashed123",
  status: true,
  userRoleId: 2,
  username: "Rashedd",
};

let Entitlement: Entitlements = {
  empNumber: employeeNumber,
  entitlement: "5",
  fromDate: "2023-01-01",
  leaveTypeId: 7,
  toDate: "2023-12-31",
};

let Leave1: Leave = {
  leaveTypeId: 7,
  fromDate: "2023-11-01",
  toDate: "2023-11-06",
  comment: null,
};

Given("The system has an Employee with Login Details", () => {
  cy.login("Admin", "admin123");
  addEmployee.createNewEmployee(Employee).then((Response) => {
    employeeNumber = Response.data.empNumber;
    addEmployee.createLoginDetails({
      ...LoginDetail,
      empNumber: employeeNumber,
    });
  });
});
Given("The employee has number of entitlement", () => {
  leave.addNewEntitlements({ ...Entitlement, empNumber: employeeNumber });
});
When("The employee login to the system", () => {
  employeeAction.logout();
  employeeAction.employeeLogin(LoginDetail.username, LoginDetail.password);
});
When("The employee requests a leave day in the future", () => {
  leave.addNewLeave(Leave1);
});
When("The admin login to the system", () => {
  employeeAction.logout();
  cy.login("Admin", "admin123");
});
When("The admin approves the leave request", () => {
  leave.approveLeave();
});

When("Open the My Leave page", () => {
  leaveAction.openLeavePage();
});
Then(
  "The leave should exist in the records table with status Scheduled",
  () => {
    leaveAssert.schedualLeaveIsOpened();
  }
);
