import { Given, When, Then } from '@cypress/cucumber-preprocessor/steps';
import CheckoutPage from '../pages/checkoutPage';

const checkoutPage = new CheckoutPage();

Given('que estou na página de checkout', () => {
  checkoutPage.visit();
});

When('adiciono um produto ao carrinho', () => {
  checkoutPage.addProductToCart();
});

When('preencho os dados de pagamento', (dataTable) => {
  const { cardNumber, expiryDate, cvv } = dataTable.rowsHash();
  checkoutPage.fillPaymentDetails(cardNumber, expiryDate, cvv);
});

Then('a compra é finalizada com sucesso', () => {
  checkoutPage.completePurchase();
  checkoutPage.verifyPurchaseSuccess();
});
