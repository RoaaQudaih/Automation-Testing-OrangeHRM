import { contains } from "cypress/types/jquery";
class searchOnAdminUserAssertions {
  checkSearchGridIsExist() {
    cy.contains("h5", "System Users").should("be.visible");
    return this;
  }
  checkSearchProcessIsSuccessfully(user: string) {
    cy.contains("div", user).should("be.visible");
    return this;
  }
  checkNoRecordVisibility() {
    cy.contains("span", "No Records Found").should("be.visible");
  }
  checkUserNameIsReset() {
    cy.contains("div.oxd-input-group", "Username")
      .find("input")
      .should("not.have.value");
  }

  checkEmployeeNameIsReset() {
    cy.get(".oxd-autocomplete-text-input > input").should("not.have.value");
  }
  checkUserRoleDropDownIsExist() {
    cy.get(".oxd-select-dropdown").should("exist");
  }
  selectedUserRoleIsVisible(userRole: string) {
    cy.contains("div.oxd-grid-item", "User Role")
      .children()
      .find(".oxd-select-wrapper")
      .should("contain", userRole);
  }
  selectedStatusIsVisible(status: string) {
    cy.contains("div.oxd-grid-item", "Status")
      .children()
      .find(".oxd-select-wrapper")
      .should("contain", status);
  }
  checkCorrectResultWhenEnterAllFields(
    name: string,
    employee: string,
    role: string,
    status: string
  ) {
    // cy.get(".orangehrm-container").should('contain',name);
    // cy.get(".orangehrm-container").should('contain',employee);
    // cy.get(".orangehrm-container").should('contain',role);
    // cy.get(".orangehrm-container").should('contain',status);
    cy.contains("div", name).should("be.visible");
    cy.contains("div", employee).should("be.visible");
    cy.contains("div", role).should("be.visible");
    cy.contains("div", status).should("be.visible");
  }
}
export default searchOnAdminUserAssertions;
