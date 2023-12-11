import { contains } from "cypress/types/jquery";

class LoginPageAssertions {
  checkDashboardPageIsOpen(isExist: boolean) {
    cy.contains("h6", "Dashboard").should(isExist ? "exist" : "not.exist");
    return this;
  }

  checkErrorMsgIsAppeare() {
    cy.contains("p", "Invalid credentials").should('be.visible');
    return this;
  }

  checkRequiredMsgIsAppeare() {
    cy.contains("span", "Required").should('be.visible');
  }

  redirectToResetPage() {
    cy.contains("h6", "Reset Password").should('be.visible');
  }
}

export default LoginPageAssertions;
