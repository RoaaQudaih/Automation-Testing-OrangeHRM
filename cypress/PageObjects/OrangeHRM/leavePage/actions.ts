class leaveActions{
  openLeavePage(){
    cy.contains('a','Leave').click();
  } 
}
export default leaveActions