const { test, expect } = require('@playwright/test');
//const login = require('./utils/login');
const baseURL = 'http://164.68.103.68:81/#/login/';
const userName = "ernest";
const pass = "P@ssw0rd";



test.describe('ApplicationSettings', () => {
    test.describe('Positive Test Cases', () => {
        test('Valid Input - All Fields Provided', async ({ page }) => {

            //vist page to login
            await page.goto(baseURL);
                        // login
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
            await page.getByText('Application SettingsManage').click();
            await page.getByRole('button', { name: ' Add Application Settings' }).click();
            await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('new 10');
            await page.getByRole('textbox').nth(1).fill('active');
            await page.getByRole('button', { name: ' Save' }).click();});
           
        // Method Not Allowed: "\r\n\r\n\r\n
        test('Valid Input - Searching for an Application setting by Name', async ({ page }) => {
            await page.goto(baseURL);
            // login 
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
             await page.locator('.card-body > div:nth-child(2)').first().click();
             await page.getByRole('button', { name: 'Toggle Dropdown' }).click();
             await page.getByPlaceholder('Name').click();
             await page.getByPlaceholder('Name').fill('decet');
            await page.getByRole('button', { name: 'Search' }).click();
            const result = await page.getByRole('cell', { name: 'decet' });
            const view = await result.textContent();
            console.log(view);
            
        });

        test('Valid Input - Searching for an Application setting by Value', async ({ page }) => {
            await page.goto(baseURL);
            // login 
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
             await page.locator('.card-body > div:nth-child(2)').first().click();
            await page.getByRole('textbox', { name: 'Search by Code' }).fill('active');
            
        });

        // Add more positive test cases as needed
    });

    test.describe('Negative Test Cases', () => {
        test('Invalid Input - Missing Name', async ({ page }) => {
            await page.goto(baseURL);
            // login 
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
            await page.getByText('Application SettingsManage').click();
            await page.getByRole('button', { name: ' Add Application Settings' }).click();
            //const input = await page.locator('input[name="q"]').first();
            await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('');
            await page.getByRole('textbox').nth(1).fill('active');
            await page.getByRole('button', { name: ' Save' }).click();
            //const error =await page.getByText('This field is required');
            const errorMessageElement = await page.waitForSelector('div.invalid-msg');
            const errorMessage = await errorMessageElement.textContent();
            console.log(errorMessage);
        });

        test('Invalid Input - Missing Value', async ({ page }) => {
            await page.goto(baseURL);
            // login 
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
            await page.getByText('Application SettingsManage').click();
            await page.getByRole('button', { name: ' Add Application Settings' }).click();
            //const input = await page.locator('input[name="q"]').first();
            await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('anything');
            await page.getByRole('textbox').nth(1).fill('');
            await page.getByRole('button', { name: ' Save' }).click();
            //const error =await page.getByText('This field is required');
            const errorMessageElement = await page.waitForSelector('div.toast-message');
            const errorMessage = await errorMessageElement.textContent();
            //unable to display error message
            console.log(errorMessage);
        });
            //!
        test('Invalid Input - Duplicate Name', async ({ page }) => {
            await page.goto(baseURL);
            // login 
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
            await page.getByText('Application SettingsManage').click();
            await page.getByRole('button', { name: ' Add Application Settings' }).click();
            //const input = await page.locator('input[name="q"]').first();
            await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('intro');
            await page.getByRole('textbox').nth(1).fill('active');
            await page.getByRole('button', { name: ' Save' }).click();
            //const error =await page.getByText('This field is required');
            await page.waitForSelector('.toast-message');

             // Get the error message text
            const errorMessageElement = await page.$('.toast-message');
            const errorMessage = await errorMessageElement.textContent();

            console.log(`Error message: ${errorMessage}`);

        });
        //!
        test('Invalid Input - Duplicate Value', async ({ page }) => {
            await page.goto(baseURL);
            // login 
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
            await page.getByText('Application SettingsManage').click();
            await page.getByRole('button', { name: ' Add Application Settings' }).click();
            //const input = await page.locator('input[name="q"]').first();
            await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('intro');
            await page.getByRole('textbox').nth(1).fill('active');
            await page.getByRole('button', { name: ' Save' }).click();
            //const error =await page.getByText('This field is required');
            await page.waitForSelector('.toast-message');

             // Get the error message text
            const errorMessageElement = await page.$('.toast-message');
            const errorMessage = await errorMessageElement.textContent();

            console.log(`Error message: ${errorMessage}`);

        });

        //!
        test('Invalid Input - Special Character in Name', async ({ page }) => {
            await page.goto(baseURL);
            // login 
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
            await page.getByText('Application SettingsManage').click();
            await page.getByRole('button', { name: ' Add Application Settings' }).click();
            //const input = await page.locator('input[name="q"]').first();
            await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('@#Name');
            await page.getByRole('textbox').nth(1).fill('then');
            await page.getByRole('button', { name: ' Save' }).click();
            //const error =await page.getByText('This field is required');
            await page.waitForSelector('.toast-message');

             // Get the error message text
            const errorMessageElement = await page.$('.toast-message');
            const errorMessage = await errorMessageElement.textContent();

            console.log(`Error message: ${errorMessage}`);

        });

        //!
        test('Invalid Input - Special Character in Value', async ({ page }) => {
            await page.goto(baseURL);
            // login 
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
            await page.getByText('Application SettingsManage').click();
            await page.getByRole('button', { name: ' Add Application Settings' }).click();
            //const input = await page.locator('input[name="q"]').first();
            await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('sleep');
            await page.getByRole('textbox').nth(1).fill('@done');
            await page.getByRole('button', { name: ' Save' }).click();
            //const error =await page.getByText('This field is required');
            await page.waitForSelector('.toast-message');

             // Get the error message text
            const errorMessageElement = await page.$('.toast-message');
            const errorMessage = await errorMessageElement.textContent();

            console.log(`Error message: ${errorMessage}`);

        });
        test('Invalid Input - Edit to Duplicate Name', async ({ page }) => {

            
        });

        test('Invalid Input - Edit to Duplicate Value', async ({ page }) => {

        login();

        });
        test('Invalid Input - Special Characters in Name Edit', async ({ page }) => {

            //await page.goto(baseURL);

//   // Login
//   await login(page);

//   // Navigate to the settings page
//   await page.waitForSelector('[aria-label="Settings"]');
//   await page.click('[aria-label="Settings"]');
//   await page.click('text=Application SettingsManage');

//   // Add application settings
//   await page.click('button:has-text("Add Application Settings")');
//   await page.fill('input[placeholder="Name"]', 'new 10');
//   await page.fill('input[type="text"]:nth-of-type(2)', 'active');
//   await page.click('button:has-text("Save")');
        });

        test('Invalid Input - Special Characters in Value Edit', async ({ page }) => {
        });
        test('Invalid Input - ', async ({ page }) => {
        });
        // Add more negative test cases as needed
    });
});
