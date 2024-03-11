import { test, expect } from '@playwright/test';
import login from '../../utils/login2';


test('test', async () => {
  // await page.goto('http://164.68.103.68:81/');
  // await page.goto('http://164.68.103.68:81/#/');
  // await page.goto('http://164.68.103.68:81/#/login');
  // await page.getByPlaceholder('Username').click();
  // await page.getByPlaceholder('Username').fill('ernest');
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('P@ssword');
  // await page.getByRole('button', { name: 'LOGIN' }).click();
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('P@ssw0rd');
  // await page.getByRole('button', { name: 'LOGIN' }).click();
  // await page.getByRole('link', { name: ' Settings' }).click();
  // await page.getByText('Application SettingsManage').click();
  // await page.getByRole('button', { name: ' Add Application Settings' }).click();
  // await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').click();
  // await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('newSetting');
  // await page.getByRole('textbox').nth(1).click();
  // await page.getByRole('textbox').nth(1).fill('true');
  // await page.getByRole('button', { name: ' Save' }).click();

   await login();

            // await page.getByRole('link', { name: ' Settings' }).click();
            // await page.getByText('Application SettingsManage').click();
            // await page.getByRole('button', { name: ' Add Application Settings' }).click();
            // await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('new 10');
            // await page.getByRole('textbox').nth(1).fill('active');
            // await page.getByRole('button', { name: ' Save' }).click();

});