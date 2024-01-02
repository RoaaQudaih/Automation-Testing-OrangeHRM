class EmployeeAsserts {
  checkEmployeeIsAdded(user: string , isVisible:boolean) {
    cy.reload();
    cy.contains("div.oxd-input-group", "Employee Name")
      .children()
      .children()
      .find("input")
      .type(user);
    cy.get('[type="submit"]').click({ force: true });
    cy.contains("div", user).should(isVisible ? "be.visible" : "not.be.visible");
  }
}
export default EmployeeAsserts;
