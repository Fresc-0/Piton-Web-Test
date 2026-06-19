import { test, expect } from '@playwright/test';

test('DemoQA - Pozitif Form Gönderme Testi', async ({ page }) => {
  // 1. Sayfaya git
  await page.goto('https://demoqa.com/automation-practice-form');

  // Sayfanın yüklenmesini bekle ve ekranı biraz aşağı kaydır (reklamları geçmek için)
  await page.evaluate(() => window.scrollTo(0, 500));

  // 2. Form alanlarını doldur
  await page.locator('#firstName').fill('Ahmet');
  await page.locator('#lastName').fill('Yılmaz');
  
  // Cinsiyet seçimi
  await page.getByText('Male', { exact: true }).click();
  
  // Telefon numarası
  await page.locator('#userNumber').fill('5551234567');

  // 3. Formu Gönder
  await page.locator('#submit').click();

  // 4. Doğrulama (Assertion)
  const successModal = page.locator('#example-modal-sizes-title-lg');
  await expect(successModal).toBeVisible();
  await expect(successModal).toHaveText('Thanks for submitting the form');
});
