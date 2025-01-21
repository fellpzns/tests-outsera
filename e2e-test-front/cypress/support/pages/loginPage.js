class LoginPage {
    visit() {
      cy.visit('https://www.fastshop.com.br/login');
    }
  
    fillLoginForm(username, password) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
    }
  
    submitLogin() {
      cy.get('button[type="submit"]').click();
    }
  
    verifyLoginSuccess() {
      cy.url().should('include', '/checkout');
    }
  }
  
  export default LoginPage;
  