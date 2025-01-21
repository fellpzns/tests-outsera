import { Given, When, Then } from '@cypress/cucumber-preprocessor/steps';
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

Given('que estou na página de login', () => {
  loginPage.visit();
});

When('faço login com {string} e {string}', (username, password) => {
  loginPage.fillLoginForm(username, password);
  loginPage.submitLogin();
});

Then('sou redirecionado para a página de checkout', () => {
  loginPage.verifyLoginSuccess();
});
