import { test, expect } from '@playwright/test';

test('TextBox - Autofill', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');
  await page.evaluate(() => window.scrollTo(0, 400));

  await page.locator('#userName').fill('Ismet Battal');
  await page.locator('#userEmail').fill('ismetbattal26@gmail.com');
  await page.locator('#currentAddress').fill('Odunpazari/Eskişehir');
  await page.locator('#permanentAddress').fill('Odunpazari/Eskişehir');

  await page.locator('#submit').click({ force: true });

  const outputBox = page.locator('#output');
  await expect(outputBox).toBeVisible();
});