class AddUserAssertions {
  checkAddUserPageIsOpen() {
    cy.contains("h6", "Add User").should("be.visible");
    return this;
  }

  checkAdminPageIsOpen() {
    cy.contains("h5", "System User").should("be.visible");
    return this;
  }

  checkDropdownListIsVisible(isVisible: boolean) {
    cy.get(".oxd-select-dropdown").should(
      isVisible ? "be.visible" : "not.be.visible"
    );
  }

  checkOptionIsSelected(option: string, isExist: boolean) {
    cy.contains("div.oxd-input-group", option)
      .children()
      .find(".oxd-select-wrapper")
      .contains(option)
      .should(isExist ? "exist" : "not.exist");
    return this;
  }

  acceptUserName(name: string) {
    cy.contains("div.oxd-input-group", "Username")
      .find("input")
      .should("have.value", name);
    return this;
  }

  checkErrorMessageIsExist(message: string, isExist: boolean) {
    cy.contains("span", message).should(isExist ? "exist" : "not.exist");
    return this;
  }

  acceptPassword(pass: string) {
    cy.contains("div.oxd-input-group", "Password")
      .find("input")
      .should("have.value", pass);
    return this;
  }

  rejectEmployeeName() {
    cy.get(".oxd-autocomplete-dropdown").should("contain", "No Records Found");
  }

  checkUserIsExistInUserGrid(userName: string,isExist:boolean) {
    cy.reload()
    cy.contains("div[role=row]",userName).should(isExist ? "exist" : "not.exist")
  }
}
export default AddUserAssertions;
