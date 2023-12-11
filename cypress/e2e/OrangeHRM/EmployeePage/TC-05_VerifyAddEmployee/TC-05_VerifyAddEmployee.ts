import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Employeebody } from "../../../../PageObjects/OrangeHRM/EmployeePage/createDataType";
import { EmployeeLoginDetail } from "../../../../PageObjects/OrangeHRM/EmployeePage/createDataType";
import EmplyeePageDataUtils from "../../../../PageObjects/OrangeHRM/EmployeePage/dataUtils";
import { random } from "cypress/types/lodash";
import addEmployeeActions from "../../../../PageObjects/OrangeHRM/EmployeePage/actions";
import addEmployeeAsserts from "../../../../PageObjects/OrangeHRM/EmployeePage/assertions";

const empolyeeAssert = new addEmployeeAsserts();
const employeeAction = new addEmployeeActions();
const addEmployee = new EmplyeePageDataUtils();
const randomId = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;

let Employee: Employeebody = {
  firstName: "Ramq",
  middleName: "Ahmed",
  lastName: "Daraghmeh",
  employeeId: randomId.toString(),
};

let LoginDetail: EmployeeLoginDetail = {
  empNumber: " ",
  password: "rama2005",
  status: true,
  userRoleId: 1,
  username: "RamaQudaih",
};

Given("The user is on the Add Employee form", () => {
  employeeAction.employeeForm();
});
When("The user add employee with login details", () => {
  addEmployee.createNewEmployee(Employee).then((Response) => {
    addEmployee.createLoginDetails({
      ...LoginDetail,
      empNumber: Response.data.empNumber,
    });
  });
});
Then(
  "The system should successfully add the employee and redirected to the employee list page",
  () => {
    empolyeeAssert.EmployeeIsAdded(Employee.firstName);
  }
);
after(() => {
  addEmployee.deleteEmployee(Employee.firstName);
});
