import { test } from '@playwright/test';
import { RegisterPage } from './pages/RegisterPage';

test.describe('Kayit Oluşturma (Register) Modülü Tests', () => {

    test('ID_REG_001 - Basarili kayit olusturma', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        const validUser = 'standard_user';
        const securePassword = 'secret_sauce';

        await registerPage.navigateToRegisterPage();
        await registerPage.register(validUser, securePassword);
        await registerPage.verifySuccessfulRegistration();
    });

    test('ID_REG_002 - Mevcut email ile kayit', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        const lockedUser = 'locked_out_user'; 
        const securePassword = 'secret_sauce';

        await registerPage.navigateToRegisterPage();
        await registerPage.register(lockedUser, securePassword);
        await registerPage.verifyEmailAlreadyRegisteredError();
    });
    test('ID_REG_003 - Sifre dogrulama kontrolu', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.navigateToRegisterPage();
        await registerPage.register('standard_user', '');
        await registerPage.verifyPasswordMismatchError();
    });
});

 