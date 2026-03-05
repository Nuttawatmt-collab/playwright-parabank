import { test as base } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import { LoginPage } from '../pages/login.page';

type Pages = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});

export const expect = test.expect;
