class userGridAssertions {
  checkEditUserVisibility() {
    cy.contains("h6", "Edit User").should("be.visible");
  }
  successfulEdit(user: string, role: number) {
    // cy.wait(7000);
    cy.contains("div.oxd-input-group", "Username").find("input").type(user);
    cy.get('[type="submit"]').click({ force: true });
    if (role === 1) {
      cy.contains("div", user).parent().next().should("contain", "Admin");
    } else {
      cy.contains("div", user).parent().next().should("contain", "ESS");
    }
  }
  successDeleted(userName: string) {
    cy.contains("div", userName).should("not.exist");
  }
}
export default userGridAssertions;
