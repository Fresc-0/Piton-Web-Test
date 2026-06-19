import { test, expect } from '@playwright/test';

test('Submit the form by filling in all required fields.', async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form');
 
  await page.evaluate(() => window.scrollTo(0, 400));

 
  await page.locator('#firstName').fill('Ismet');
  await page.locator('#lastName').fill('Battal');
  await page.getByText('Male', { exact: true }).click();
  await page.locator('#userNumber').fill('5428887637');

 
  await page.locator('#submit').click({ force: true });

 
  const successModal = page.locator('#example-modal-sizes-title-lg');
  await expect(successModal).toBeVisible();
});