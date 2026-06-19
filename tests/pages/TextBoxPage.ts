import { Page, Locator } from '@playwright/test';

export class TextBoxPage {
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;
    readonly outputName: Locator;
    readonly outputEmail: Locator;
    
    readonly yesRadioLabel: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.locator('#userName');
        this.emailInput = page.locator('#userEmail');
        this.currentAddressInput = page.locator('#currentAddress');
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit');
        this.outputName = page.locator('#output #name');
        this.outputEmail = page.locator('#output #email');

        this.yesRadioLabel = page.locator('label[for="yesRadio"]');
        this.successMessage = page.locator('.text-success');
    }

    async navigate(): Promise<void> {
        await this.page.goto('https://demoqa.com/text-box');
    }

    async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string): Promise<void> {
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.currentAddressInput.fill(currentAddress);
        await this.permanentAddressInput.fill(permanentAddress);
    }

    async submit(): Promise<void> {
        await this.submitButton.click();
    }

    async selectYes(): Promise<void> {
        await this.yesRadioLabel.click();
    }
}