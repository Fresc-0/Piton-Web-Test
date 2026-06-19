import { test, expect } from '@playwright/test';



test('Progress bar - It cannot be restarted without performing a reset.', async ({ page }) => {
  await page.goto('https://demoqa.com/progress-bar');
  
  const startButton = page.locator('#startStopButton');
  await expect(startButton).toBeVisible();
  await startButton.click();
  
  const progressBar = page.locator('div[role="progressbar"]');
  await expect(progressBar).toHaveText('100%', { timeout: 20000 }); 

  const resetButton = page.locator('#resetButton');
  await expect(resetButton).toBeVisible();

  await expect(startButton).not.toBeVisible();
});