import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import EmplyeePageDataUtils from "../../../../PageObjects/OrangeHRM/EmployeePage/dataUtils";
import { EmployeeLoginDetail } from "../../../../support/employeePage/createDataType";
import { Employeebody } from "../../../../support/employeePage/createDataType";
const randomId = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
import { Entitlements } from "../../../../support/leavePage/createDataType";
import LeavePageDataUtils from "../../../../PageObjects/OrangeHRM/leavePage/dataUtils";
import EmployeeActions from "../../../../PageObjects/OrangeHRM/EmployeePage/actions";
import { Leave } from "../../../../support/leavePage/createDataType";
import LeaveActions from "../../../../PageObjects/OrangeHRM/leavePage/actions";
import LeaveAssertions from "../../../../PageObjects/OrangeHRM/leavePage/assertions";
import { USER_NAME } from "@support/shared/constant";
import { PASSWORD } from "@support/shared/constant";
import { getEmployee } from "@support/employeePage/dataFakers";
import { getEmployeeLoginDetail } from "@support/employeePage/dataFakers";

let employeeNumber: string;
const addEmployee = new EmplyeePageDataUtils();
const leaveAssert = new LeaveAssertions();
const leaveAction = new LeaveActions();
const employeeAction = new EmployeeActions();
const leave = new LeavePageDataUtils();

const newEmployee=getEmployee();
const newEmployeeLoginDetail=getEmployeeLoginDetail();

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
  cy.login(USER_NAME, PASSWORD);
  addEmployee.createNewEmployee(newEmployee).then((Response) => {
    employeeNumber = Response.data.empNumber;
    addEmployee.createLoginDetails({
      ...newEmployeeLoginDetail,
      empNumber: employeeNumber,
    });
  });
});
Given("The employee has number of entitlement", () => {
  leave.addNewEntitlements({ ...Entitlement, empNumber: employeeNumber });
});
When("The employee login to the system", () => {
  employeeAction.logout();
  employeeAction.employeeLogin(newEmployeeLoginDetail.username, newEmployeeLoginDetail.password);
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
    leaveAssert.checkSchedualLeaveIsOpened(true);
  }
);
