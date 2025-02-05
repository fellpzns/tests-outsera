import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../../pages/loginPage'

import url from '../../fixtures/url.json'

Given("que o usuário acessa a página de login", () => {
  cy.visit(url.baseUrl);
})

When('o usuário faz login com {string} e {string}', (username, password) => {
  loginPage.fillUsername(username)
  loginPage.fillPassword(password)
  loginPage.submit()
})

Then('o usuário deve ser redirecionado para a página de vendas', () => {
  cy.url().should('include', '/inventory.html')
  cy.get('.inventory_list').should('be.visible')
})