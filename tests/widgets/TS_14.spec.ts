import {test , expect} from '@playwright/test';

test('Tabs - Tab Switching and Content Control', async ({ page }) => {
    await page.goto('https://demoqa.com/tabs');

await expect(page.locator('#demo-tabpane-what')).toBeVisible();

await page.locator('#demo-tab-origin').click();

await expect(page.locator('#demo-tabpane-origin')).toBeVisible();

await expect(page.locator('#demo-tabpane-origin')).toContainText('Contrary to popular belief');
});
