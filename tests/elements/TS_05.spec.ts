import { test, expect } from '@playwright/test';

test.describe('DemoQA - Radio Button Module', () => {

  test('Radio Button - Deactive No Button', async ({ page }) => {

    await page.goto('https://demoqa.com/radio-button');

    await page.evaluate(() => window.scrollBy(0, 200));

    const noRadioInput = page.locator('#noRadio');

    await expect(noRadioInput).toBeDisabled();

    const noRadioLabel = page.locator('label[for="noRadio"]');
    

    await expect(noRadioLabel).toHaveClass(/disabled/);

    await noRadioLabel.click({ force: true });
    await expect(noRadioInput).not.toBeChecked();

    const successMessage = page.locator('.text-success');
    await expect(successMessage).not.toBeVisible();
  });

});