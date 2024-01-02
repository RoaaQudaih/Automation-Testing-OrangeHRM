class LeaveAssertions {
  checkSchedualLeaveIsOpened(isVisible:boolean) {
    cy.contains("div", "Scheduled").should(isVisible ? "be.visible" : "not.be.visible");
  }
}
export default LeaveAssertions;
