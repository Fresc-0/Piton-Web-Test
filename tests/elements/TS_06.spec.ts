import { test, expect } from '@playwright/test';

test('Web Tables - Add new user', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByPlaceholder('First Name').fill('Ismet');
  await page.getByPlaceholder('Last Name').fill('Battal');
  await page.getByPlaceholder('name@example.com').fill('ismetbattal26@gmail.com');
  await page.getByPlaceholder('Age').fill('21');
  await page.getByPlaceholder('Salary').fill('26222');
  await page.getByPlaceholder('Department').fill('IT');

  await page.getByRole('button', { name: 'Submit' }).click();
});