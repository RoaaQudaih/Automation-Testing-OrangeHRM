class AddUserAction {
  openAdminPage() {
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
    ).as("messages");
    cy.intercept(
      "Get",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users**"
    ).as("users");

    cy.visit("/admin/viewSystemUsers");
    cy.wait("@messages");
    cy.wait("@users");
    return this;
  }

  clickAddButton() {
    cy.contains("button", "Add").click({force:true});
    return this;
  }

  clickCancelButton() {
    cy.contains("button", "Cancel").click();
    return this;
  }

  clickDropdownField(field:string) {
    cy.contains("div.oxd-input-group", field)
      .find("i.oxd-select-text--arrow")
      .parent()
      .click();
    return this;
  }

  selectOptionFromListboxDropdown(option: string) {
    cy.contains('[role="listbox"]', option).click();
    return this;
  }

  typeInUserNameInputField(name: string) {
    cy.contains("div.oxd-input-group", "Username")
      .find("input")
      .clear()
      .type(name);
    return this;
  }

  typeInPasswordInputField(password: string) {
    cy.contains("div.oxd-input-group", "Password")
      .find("input")
      .clear()
      .type(password);
    return this;
  }

  typeInConfirmPasswordInputField(confirmPass: string) {
    cy.contains("div.oxd-input-group", "Confirm Password")
      .find("input")
      .clear()
      .type(confirmPass);
    return this;
  }

  typeInEmployeeNameInputField(employeeName: string) {
    cy.contains("div.oxd-input-group", "Employee Name")
      .find("input")
      .clear()
      .type(employeeName);
    return this;
  }

  selectValueForEmployeeNameInputField(employeeName: string) {
    this.typeInEmployeeNameInputField(employeeName);
    cy.get(".oxd-autocomplete-dropdown").contains(employeeName).click();
  }

  clickSaveButton() {
    cy.get('[type="submit"]').click();
  }
}

export default AddUserAction;
