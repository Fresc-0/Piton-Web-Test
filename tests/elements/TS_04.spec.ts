import { test, expect} from '@playwright/test';
test('Radio Button - Preventing multiple selections', async({ page }) => {

await page.goto('https://demoqa.com/radio-button');

const yesLabel = page.locator('label[for="yesRadio"]');
const impressiveLabel = page.locator('label[for="impressiveRadio"]');

const yesRadio = page.locator('#yesRadio');
const impressiveRadio = page.locator('#impressiveRadio');

await yesLabel.click();

await expect(yesRadio).toBeChecked();
await expect(impressiveRadio).not.toBeChecked();

await impressiveLabel.click();

await expect(impressiveRadio).toBeChecked();
await expect(yesRadio).not.toBeChecked();
});