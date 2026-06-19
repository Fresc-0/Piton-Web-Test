import { test, expect } from '@playwright/test';

test('Data Picker - Select a date from calender', async ({ page }) => {
  await page.goto('https://demoqa.com/date-picker');

  await page.locator('#datePickerMonthYearInput').click();
  
  await page.locator('.react-datepicker__month-select').selectOption('5');

  await page.locator('.react-datepicker__day--020:not(.react-datepicker__day--outside-month)').click();

  await expect(
    page.locator('#datePickerMonthYearInput')
  ).toHaveValue('06/20/2026');
  });
  