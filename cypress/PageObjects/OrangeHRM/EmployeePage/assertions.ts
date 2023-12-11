class addEmployeeAsserts{
    EmployeeIsAdded(user:string){
        cy.reload();
        cy.contains('div.oxd-input-group','Employee Name').children().children().find('input').type(user);
        cy.get('[type="submit"]').click({force:true});
        cy.contains('div',user).should('be.visible');
    }
  }
  export default addEmployeeAsserts 