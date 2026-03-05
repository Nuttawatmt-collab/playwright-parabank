import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  retries: process.env.CI ? 2 : 1,

  reporter: [
    ['html', { open: 'on-failure' }],
    ['list']
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://parabank.parasoft.com',
    headless: process.env.CI ? true : false,
    viewport: { width: 1280, height: 800 },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  outputDir: 'test-results/',
});
