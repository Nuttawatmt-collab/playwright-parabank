import { Page } from '@playwright/test';
import { loginLocator } from '../locators/login.locator';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/parabank/index.htm');
  }

  async login(username: string, password: string) {
    await this.page.fill(loginLocator.username, username);
    await this.page.fill(loginLocator.password, password);
    await this.page.click(loginLocator.loginBtn);
  }
}
