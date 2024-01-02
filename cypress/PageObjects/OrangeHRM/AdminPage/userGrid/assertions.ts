class UserGridAssertions {
  checkEditUserFormIsVisible(isVisible :boolean) {
    cy.contains("h6", "Edit User").should(isVisible ? "be.visible" : "not.be.visible");
  }

  checkEditIsVisible(user: string, role: string) {
    // cy.wait(7000);
    cy.contains("div.oxd-input-group", "Username").find("input").type(user);
    cy.get('[type="submit"]').click({ force: true });
    if (role === "Admin") {
      cy.contains("div", user).parent().next().should("contain", "Admin");
    } else {
      cy.contains("div", user).parent().next().should("contain", "ESS");
    }
  }

  checkUserIsDeleted(userName: string,isExist:boolean) {
    cy.contains("div", userName).should(isExist ? "exist" : "not.exist");
  }
}
export default UserGridAssertions;
