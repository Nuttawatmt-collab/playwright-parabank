import { test, expect } from '../fixtures/base.fixture';
import { validRegisterData } from '../test-data/register.data';
import { invalidFormatData } from '../test-data/register.data';
import { registerLocator } from '../locators/register.locator';

test("REG001 - Register Success", async ({ registerPage, page }) => {
    await registerPage.goto();
    await registerPage.fillForm(validRegisterData());
    await registerPage.submit();

    await expect(page.locator(registerLocator.successMessage)).toBeVisible();
  });

  test("REG002 - Missing First Name", async ({ registerPage, page }) => {
    await registerPage.goto();
    await registerPage.fillForm(invalidFormatData.missingFirstName);
    await registerPage.submit();

    await expect(page.locator("text=First Name is required")).toBeVisible();
  });

  test("REG003 - Password Mismatch", async ({ registerPage, page }) => {
    await registerPage.goto();
    await registerPage.fillForm(invalidFormatData.passwordMismatch);
    await registerPage.submit();

    await expect(page.locator("text=Passwords did not match")).toBeVisible();
  });


