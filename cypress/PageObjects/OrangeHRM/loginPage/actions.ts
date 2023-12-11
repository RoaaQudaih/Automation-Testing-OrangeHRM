class LoginPageAction {
  visit() {
    cy.visit("/auth/login");
    return this;
  }

  typeInUserNameInputField(user: string) {
    cy.get('input[name="username"]').clear().type(user);
    return this;
  }

  typeInPasswordField(pass: string) {
    cy.get('input[name="password"]').clear().type(pass);
    return this;
  }

  clickLoginButton() {
    cy.contains("button", "Login").click();
    return this;
  }

  clickOnForgotPasswordLink() {
    cy.get(".orangehrm-login-forgot-header").click();
    return this;
  }
}

export default LoginPageAction;
