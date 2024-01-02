class SearchGridActions {
  typeInUserNameField(user: string) {
    cy.contains("div.oxd-input-group", "Username")
      .find("input")
      .clear()
      .type(user);
    return this;
  }

  clickSearchButton() {
    cy.intercept("GET", "/api/v2/admin/users**").as("users");
    cy.get('[type="submit"]').click({ force: true });
    cy.wait("@users");
  }

  clickResetButton() {
    cy.contains("button", "Reset").click({ force: true });
  }

  typeInEmployeeNameField(employeeName: string) {
    cy.contains("div.oxd-grid-item", "Employee Name")
      .children()
      .children()
      .find("input")
      .type(employeeName);
    cy.get(".oxd-autocomplete-dropdown").contains(employeeName).click();
  }

  clickUserRoleField() {
    // cy.contains("div.oxd-grid-item", "User Role")
    //   .children()
    //   .children()
    //   .find("i.oxd-select-text--arrow")
    //   .parent()
    //   .click({ force: true });
    cy.contains("div.oxd-input-group", "User Role")
      .find("i.oxd-select-text--arrow")
      .parent()
      .click({ force: true });
    return this
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

export default SearchGridActions;
