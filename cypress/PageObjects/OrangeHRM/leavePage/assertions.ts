class leaveAssertions {
  schedualLeaveIsOpened() {
    cy.contains("div", "Scheduled").should("be.visible");
  }
}
export default leaveAssertions;
