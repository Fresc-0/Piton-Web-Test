import { test, expect } from '@playwright/test';

test.describe('DemoQA - Forms Module', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
  });
  
  test('Missing phone number entered.', async ({ page }) => {
    await page.fill('#firstName', 'Ayşe');
    await page.fill('#lastName', 'Yılmaz');
    await page.click('label[for="gender-radio-2"]');
    await page.fill('#userNumber', '12345');
    await page.press('#userNumber', 'Enter');


    await expect(page.locator('.modal-title')).not.toBeVisible();
  });
});