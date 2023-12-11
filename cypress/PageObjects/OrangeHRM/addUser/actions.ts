class addUserAction {
  navigateToAdminPage() {
    cy.contains("span", "Admin").click();
    return this;
  }

  clickAddButton() {
    cy.contains("button", "Add").click();
    return this;
  }
  clickCancelButton() {
    cy.contains("button", "Cancel").click();
    return this;
  }
  clickUserRoleField() {
    cy.contains("div.oxd-input-group", "User Role")
      .find("i.oxd-select-text--arrow")
      .parent()
      .click();
    return this;
  }
  clickStatusField() {
    cy.contains("div.oxd-input-group", "Status")
      .find("i.oxd-select-text--arrow")
      .parent()
      .click();
    return this;
  }

  selectUserRole(userRole: string) {
    cy.contains('[role="listbox"]', userRole).click();
    return this;
  }
  selectStatus(status: string) {
    cy.contains('[role="listbox"]', status).click();
  }

  enterUserName(name: string) {
    cy.contains("div.oxd-input-group", "Username")
      .find("input")
      .clear()
      .type(name);
    return this;
  }
  typeInPasswordField(password: string) {
    cy.contains("div.oxd-input-group", "Password")
      .find("input")
      .clear()
      .type(password);
    return this;
  }
  typeInConfirmPasswordField(confirmPass: string) {
    cy.contains("div.oxd-input-group", "Confirm Password")
      .find("input")
      .type(confirmPass);
    return this;
  }
  typeInEmployeeNameField(employeeName: string,isValid:boolean) {
    const inputGroupSelector = "div.oxd-input-group";
    const autocompleteDropdownSelector = ".oxd-autocomplete-dropdown";

    cy.contains(inputGroupSelector, "Employee Name")
      .find("input").clear().type(employeeName);
    if(isValid){
      cy.get(autocompleteDropdownSelector).contains(employeeName).click()
    }    
  }
  clickSaveButton() {
    cy.get('[type="submit"]').click();
  }
}
export default addUserAction;
