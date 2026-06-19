import {test, expect} from '@playwright/test';
test('A combination of all optional and required fields.', async({ page }) => {

await page.goto('https://demoqa.com/automation-practice-form');
await page.evaluate(() => window.scrollTo(0, 400));

await page.locator('#firstName').fill('Ismet');
await page.locator('#lastName').fill('Battal');
await page.locator('#userNumber').fill('5428887637');

await page.getByText('Sports' ,{exact: true}).click();
await page.getByText('Reading' ,{exact: true}).click();
await page.getByText('Male' , {exact: true}).click();
await page.locator('#currentAddress').fill('Odunpazari/Eskişehir');

await page.locator('#submit').click({ force:true });

const successModal = page.locator('#example-modal-sizes-title-lg');
await expect(successModal).toBeVisible();
});