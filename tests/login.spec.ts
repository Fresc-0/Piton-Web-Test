import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Kimlik Doğrulama (Auth) Modülü Tests', () => {

    test('ID_LOGIN_001 - Gecerli kullanici ile giris', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        
        await loginPage.login('standard_user', 'secret_sauce'); 
        await loginPage.verifySuccessfulLogin();
    });

    test('ID_LOGIN_002 - Hatali sifre ile giris', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        
        await loginPage.login('standard_user', 'yanlis_sifre_123');
        await loginPage.verifyInvalidPasswordErrorMessage();
    });

    test('ID_LOGIN_003 - Bos alan ile giris denemesi', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login('', '');
        await loginPage.verifyRequiredFieldsErrorMessage();
    });

    test('ID_LOGIN_004 - Yanlis kullanici adi', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login('gecersiz_kullanici_adi', 'secret_sauce');
        await loginPage.verifyUserNotFoundErrorMessage();
    });

});