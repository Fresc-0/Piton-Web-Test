import { test, expect } from '@playwright/test';

test('When "State" is selected, the "City" field becomes active, allowing you to choose the correct city.', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');


  await page.evaluate(() => window.scrollBy(0, 500));


  const stateDropdown = page.locator('#state');
  await stateDropdown.click();
  await page.locator('text=NCR').click(); 

  const cityDropdown = page.locator('#city');
  await cityDropdown.click();

  const cityOption = page.locator('text=Delhi');
  await expect(cityOption).toBeVisible();
  await cityOption.click();

  await expect(stateDropdown).toContainText('NCR');
  await expect(cityDropdown).toContainText('Delhi');
});