import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";

Cypress.Commands.add('login',(username:string,password:string)=>{
  cy.visit("/auth/login");
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get("button").click();
})
declare global {
  namespace Cypress {
    interface Chainable {
      login(username:string,password:string);
    }
  }
}
