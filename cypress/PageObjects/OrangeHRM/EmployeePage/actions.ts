import { USER_NAME } from "@support/shared/constant";
import { PASSWORD } from "@support/shared/constant";

class EmployeeActions {
  openEmployeePage() {
    cy.login(USER_NAME, PASSWORD);
    cy.visit("/pim/viewEmployeeList");
  }

  logout() {
    cy.get(".oxd-userdropdown-icon").click();
    cy.contains("a", "Logout").click();
    return this;
  }

  employeeLogin(user: string, pass: string) {
    cy.get('input[name="username"]').type(user);
    cy.get('input[name="password"]').type(pass);
    cy.get("button").click();
    return this;
  }
}
export default EmployeeActions;
