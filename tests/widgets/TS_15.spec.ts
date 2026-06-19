import { test, expect } from '@playwright/test';

test('Menu - Sub Sub List is open', async ({ page }) => {
  await page.goto('https://demoqa.com/menu');

  await page.getByText('Main Item 2').hover();

  const subSubList = page.getByText('SUB SUB LIST');

  await expect(subSubList).toBeVisible();

  await subSubList.hover();

  await expect(page.getByText('Sub Sub Item 1')).toBeVisible();
  await expect(page.getByText('Sub Sub Item 2')).toBeVisible();
});