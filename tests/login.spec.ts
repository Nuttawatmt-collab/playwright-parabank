import { test, expect } from '../fixtures/base.fixture';
import { invalidLogin } from '../test-data/login.data';
import { validLogin } from '../test-data/login.data';
import { loginLocator } from '../locators/login.locator';


test('LOG001 - Login Success', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(validLogin.username, validLogin.password);

  await expect(page.locator(loginLocator.successMsg)).toBeVisible();
});
test('LOG002 - Login Fail with wrong username&password', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(invalidLogin.username, invalidLogin.password);

  await expect(page.locator(loginLocator.errorMsg)).toBeVisible();
});
test('LOG003 - Login Fail with wrong password', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(validLogin.username, invalidLogin.password);

  await expect(page.locator(loginLocator.errorMsg)).toBeVisible();
});
