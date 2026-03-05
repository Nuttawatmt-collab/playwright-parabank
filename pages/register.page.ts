import { Page } from '@playwright/test';
import { registerLocator } from '../locators/register.locator';

export class RegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/parabank/register.htm');
  }

  async fillForm(data: any) {
    await this.page.fill(registerLocator.firstName, data.firstName);
    await this.page.fill(registerLocator.lastName, data.lastName);
    await this.page.fill(registerLocator.address, data.address);
    await this.page.fill(registerLocator.city, data.city);
    await this.page.fill(registerLocator.state, data.state);
    await this.page.fill(registerLocator.zipCode, data.zipCode);
    await this.page.fill(registerLocator.ssn, data.ssn);
    await this.page.fill(registerLocator.username, data.username);
    await this.page.fill(registerLocator.password, data.password);
    await this.page.fill(registerLocator.confirm, data.confirmPassword);
  }

  async submit() {
    await this.page.click(registerLocator.registerBtn);
  }
}
