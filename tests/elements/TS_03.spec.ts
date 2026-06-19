import { test, expect } from '@playwright/test';

test.describe('DemoQA - Radio Button Module Test', () => {

    test('Radio Button - Activate Yes Button ', async ({ page }) => {
        await page.goto('https://demoqa.com/radio-button');

        await page.locator('label[for="yesRadio"]').click();

        await expect(page.locator('.text-success')).toHaveText('Yes');
    });
});