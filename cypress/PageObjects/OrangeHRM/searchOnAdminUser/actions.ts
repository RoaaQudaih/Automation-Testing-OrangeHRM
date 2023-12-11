class searchOnAdminUserActions {
  typeUserNameField(user: string) {
    cy.contains("div.oxd-input-group", "Username").find("input").type(user);
    return this;
  }
  clickSearchButton() {
    cy.get('[type="submit"]').click({ force: true });
  }
  clickResetButton() {
    cy.contains("button", "Reset").click({ force: true });
  }
  enterEmployeeName(letter: string, emp: string) {
    cy.contains("div.oxd-grid-item", "Employee Name")
      .children()
      .children()
      .find("input")
      .type(letter);
    cy.get(".oxd-autocomplete-dropdown").contains(emp).click();
  }

  clickUserRoleField() {
    cy.contains("div.oxd-grid-item", "User Role")
      .children()
      .children()
      .find("i.oxd-select-text--arrow")
      .parent()
      .click({ force: true });
  }
  selectUserRole(userRole: string) {
    cy.contains('[role="listbox"]', userRole).click();
    return this;
  }
  selectStatus(status: string) {
    cy.contains("div.oxd-input-group", "Status")
      .find("i.oxd-select-text--arrow")
      .parent()
      .click({ force: true });
    cy.contains('[role="listbox"]', status).click();
  }
}
export default searchOnAdminUserActions;
