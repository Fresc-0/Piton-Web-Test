import { test, expect } from '@playwright/test';

test.describe('DemoQA - Practice Form Extra Tests', () => {

  test('Entering Alphabetical Characters into the Phone Number Field', async ({ page }) => {
   
    await page.goto('https://demoqa.com/automation-practice-form');

  
    await page.evaluate(() => window.scrollBy(0, 400));

    await page.fill('#firstName', 'Test');
    await page.fill('#lastName', 'User');
    await page.click('label[for="gender-radio-1"]');

    const userNumberInput = page.locator('#userNumber');
    await userNumberInput.fill('ABCDEabcde'); 

    await userNumberInput.press('Enter');
    
    const successModal = page.locator('.modal-title');
    await expect(successModal).not.toBeVisible();

    const userForm = page.locator('#userForm');
    await expect(userForm).toHaveClass(/was-validated/);
    
    const isPhoneValid = await userNumberInput.evaluate((input: HTMLInputElement) => input.checkValidity());
    expect(isPhoneValid).toBe(false); 
  });

});