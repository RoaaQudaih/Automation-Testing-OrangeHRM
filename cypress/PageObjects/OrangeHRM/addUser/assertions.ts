class addUserAssertions {
  redirectedToTheAddForm() {
    cy.contains("h6", "Add User");
    return this;
  }
  redirectedToTheAdminPaage() {
    cy.contains("h5", "System User").should("be.visible");
    return this;
  }
  checkDropDownListVisibility() {
    cy.get(".oxd-select-dropdown").should("be.visible");
  }
  displayedSelectedUserRole(userRole: string) {
    cy.contains("div.oxd-input-group", "User Role")
      .children()
      .find(".oxd-select-wrapper")
      .should("contain", userRole);
    return this;
  }
  displayedSelectedStatus(status:string) {
    cy.contains("div.oxd-input-group", "Status")
      .children()
      .find(".oxd-select-wrapper")
      .should("contain", status);
    return this;
  }

  rejectShortUserName() {
    cy.contains("span", "Should be at least 5 characters").should("be.visible");
    return this;
  }
  rejectLongUserName() {
    cy.contains("span", "Should not exceed 40 characters").should("be.visible");
    return this;
  }
  acceptUserName(name: string) {
    cy.contains("div.oxd-input-group", "Username")
      .find("input")
      .should("have.value", name);
    return this;
  }
  rejectShortPassword() {
    cy.contains("span", "Should have at least 7 characters").should(
      "be.visible"
    );
  }
  rejectLongPassword() {
    cy.contains("span", "Should not exceed 64 characters").should("be.visible");
  }
  rejectJustLetterPassword() {
    cy.contains("span", "Your password must contain minimum 1 number").should(
      "be.visible"
    );
  }
  rejectPassword() {
    cy.contains(
      "span",
      "Your password must contain minimum 1 lower-case letter"
    ).should("be.visible");
  }

  acceptPassword(pass: string) {
    cy.contains("div.oxd-input-group", "Password")
      .find("input")
      .should("have.value", pass);
    return this;
  }
  acceptConfirmPassword() {
    cy.contains("span", "Passwords do not match").should("not.exist");
  }
  rejectConfirmPassword() {
    cy.contains("span", "Passwords do not match").should("be.visible");
  }
  rejectEmployeeName() {
    cy.get(".oxd-autocomplete-dropdown").should("contain", "No Records Found");
  }
  displayEmployeeName() {
    cy.contains("span", "Invalid").should("not.exist");
  }
  successfulAddUser(userName: string) {
    cy.contains("div", userName).should("be.visible");
  }
  rejectExistUserName() {
    cy.contains("span", "Already exists").should("be.visible");
  }
  requiredField() {
    cy.contains("span", "Required").should("be.visible");
  }
}
export default addUserAssertions;
