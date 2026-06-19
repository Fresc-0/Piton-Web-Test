import { test, expect } from '@playwright/test';

test('Slider - Slider value change', async ({ page }) => {
  await page.goto('https://demoqa.com/slider');

  const slider = page.locator('input[type="range"]');

  await slider.fill('75');

  await expect(page.locator('#sliderValue')).toHaveValue('75');
});