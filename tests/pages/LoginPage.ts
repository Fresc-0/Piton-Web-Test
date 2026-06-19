import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
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

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        if (username !== '') await this.usernameInput.fill(username);
        if (password !== '') await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifySuccessfulLogin() {
        await expect(this.page).toHaveURL(/.*inventory.html/, { timeout: 7000 }); 
    }

    async verifyInvalidPasswordErrorMessage() {
        await expect(this.errorAlert).toBeVisible();
        await expect(this.errorAlert).toContainText('Epic sadface: Username and password do not match any user in this service'); 
    }

    async verifyRequiredFieldsErrorMessage() {
        await expect(this.errorAlert).toBeVisible();
        await expect(this.errorAlert).toContainText('Epic sadface: Username is required');
    }

    async verifyUserNotFoundErrorMessage() {
        await expect(this.errorAlert).toBeVisible();
        await expect(this.errorAlert).toContainText('Epic sadface: Username and password do not match any user in this service');
    }
}