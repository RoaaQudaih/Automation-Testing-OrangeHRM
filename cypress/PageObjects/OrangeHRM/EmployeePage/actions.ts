class addEmployeeActions{
  employeeForm(){
    cy.login('Admin','admin123');
    cy.contains('span','PIM').click();
  }
  logout(){
    cy.get('.oxd-userdropdown-icon').click();
    cy.contains('a','Logout').click();
    return this
  }
  employeeLogin(user:string,pass:string){    
    cy.get('input[name="username"]').type(user);
    cy.get('input[name="password"]').type(pass);
    cy.get("button").click();
    return this
  }
}
export default addEmployeeActions