class UserGridAction{
  clickEditIcon(userName:string){
    cy.contains('div.oxd-input-group','Username').find('input').type(userName);
    cy.get('[type="submit"]').click({force:true});
    cy.contains("div", userName).parent().parent().find("i.bi-pencil-fill").parent().click()
    return this
  }  

  clickSaveButton(){
    cy.get("[type='submit']").click();
    cy.wait("@messages");
    cy.wait("@users");
  }

  editUserRoleField(userRole:string){
    cy.contains('div.oxd-input-group','User Role').find('i.oxd-select-text--arrow').parent().click();
    if (userRole==="Admin"){
      cy.contains(".oxd-select-dropdown","ESS").click();
    }
    else{
      cy.contains(".oxd-select-dropdown","Admin").click();
    }
  }  
}
export default UserGridAction