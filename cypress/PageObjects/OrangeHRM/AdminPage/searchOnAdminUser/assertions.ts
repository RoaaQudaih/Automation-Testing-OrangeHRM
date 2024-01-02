import { contains } from "cypress/types/jquery";
class searchOnAdminUserAssertions {
  checkSearchGridIsExist(isExist: boolean) {
    cy.contains("h5", "System Users").should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkSearchProcessIsSuccessfully(user: string, isVisible: boolean) {
    cy.contains("div[role=row]", user).should(
      isVisible ? "be.visible" : "not.be.visible"
    );
    return this;
  }

  checkNoRecordIsVisible(isVisible: boolean) {
    cy.contains("span", "No Records Found").should(
      isVisible ? "be.visible" : "not.be.visible"
    );
  }

  checkUserNameIsReset(isContain: boolean) {
    cy.contains("div.oxd-input-group", "Username")
      .find("input")
      .should(isContain ? "have.value" : "not.have.value");
  }

  checkEmployeeNameIsReset(isContain: boolean) {
    cy.get(".oxd-autocomplete-text-input > input").should(
      isContain ? "have.value" : "not.have.value"
    );
  }

  checkDropdownIsExist(isExist:boolean) {
    cy.get(".oxd-select-dropdown").should(isExist ? "exist" : "not.exist");
  }

  selectOptionIsVisible(field: string, option: string, isVisible: boolean) {
    cy.contains("div.oxd-grid-item", field)
      .children()
      .find(".oxd-select-wrapper")
      .contains(option)
      .should(isVisible ? "be.visible" : "not.be.visible");
  }

  checkCorrectResultWhenEnterAllFields(
    name: string,
    employee: string,
    role: string,
    status: string,
    isVisible: boolean
  ) {
    cy.contains("div[role=row]", name).should(
      isVisible ? "be.visible" : "not.be.visible"
    )
    cy.contains("div[role=row]", employee).should(
      isVisible ? "be.visible" : "not.be.visible"
    )
    cy.contains("div[role=row]", role).should(
      isVisible ? "be.visible" : "not.be.visible"
    )
    cy.contains("div[role=row]", status).should(
      isVisible ? "be.visible" : "not.be.visible"
    );
  }
}
export default searchOnAdminUserAssertions;
