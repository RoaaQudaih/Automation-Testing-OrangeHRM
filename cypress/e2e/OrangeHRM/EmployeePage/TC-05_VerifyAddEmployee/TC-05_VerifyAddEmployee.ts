import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import EmplyeePageDataUtils from "../../../../PageObjects/OrangeHRM/EmployeePage/dataUtils";
import EmployeeActions from "../../../../PageObjects/OrangeHRM/EmployeePage/actions";
import EmployeeAsserts from "../../../../PageObjects/OrangeHRM/EmployeePage/assertions";
import { getEmployee, getEmployeeLoginDetail } from "@support/employeePage/dataFakers";

const empolyeeAssert = new EmployeeAsserts();
const employeeAction = new EmployeeActions();
const addEmployee = new EmplyeePageDataUtils();


let Employee=getEmployee();

let LoginDetail=getEmployeeLoginDetail();

Given("The user is on the Add Employee form", () => {
  employeeAction.openEmployeePage();
});
When("The user add employee with login details", () => {
  addEmployee.createNewEmployee(Employee).then((response) => {
    addEmployee.createLoginDetails({
      ...LoginDetail,
      empNumber: response,
    });
  });
});
Then(
  "The system should successfully add the employee and redirected to the employee list page",
  () => {
    empolyeeAssert.checkEmployeeIsAdded(Employee.firstName, true);
  }
);
after(() => {
  addEmployee.deleteEmployee(Employee.employeeId);
});
