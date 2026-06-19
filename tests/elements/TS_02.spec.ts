import { test, expect } from '@playwright/test';

test('Text Box - Error e mail', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.locator('#userName').fill('Ismet Battal');
  await page.locator('#userEmail').fill('gecersiz-eposta.com');

  await page.locator('#submit').click();

  await expect(page.locator('#userEmail')).toHaveClass(/field-error/);
});