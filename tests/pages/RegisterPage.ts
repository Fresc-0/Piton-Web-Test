import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorAlert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorAlert = page.locator('h3[data-test="error"]');
    }

    async navigateToRegisterPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async register(username: string, password: string) {
    if (username !== '') {
        await this.usernameInput.fill(username);
    }

    if (password !== '') {
        await this.passwordInput.fill(password);
    }

    await this.loginButton.click();
}

    async verifySuccessfulRegistration() {
        await expect(this.page).toHaveURL(/.*inventory.html/);
    }

    async verifyEmailAlreadyRegisteredError() {
        await expect(this.errorAlert).toBeVisible();
        await expect(this.errorAlert).toContainText('Epic sadface: Sorry, this user has been locked out.');
    }

    async verifyPasswordMismatchError() {
        await expect(this.errorAlert).toBeVisible();
        await expect(this.errorAlert).toContainText('Epic sadface: Password is required'); 
    }

    async verifyRequiredFieldsError() {
        await expect(this.errorAlert).toBeVisible();
        await expect(this.errorAlert).toContainText('Epic sadface: Username is required');
    }
}