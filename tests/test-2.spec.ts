import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://164.68.103.68:81/');
  await page.goto('http://164.68.103.68:81/#/');
  await page.goto('http://164.68.103.68:81/#/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('ernest');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('P@ssw0rd');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('link', { name: ' Settings' }).click();
  await page.locator('.fa-3x').first().click();
  await page.getByRole('cell', { name: 'AppSettings' }).click();
  await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('AppSettingss');
  await page.getByRole('button', { name: ' Save' }).click();
  await page.locator('#wrapper div').filter({ hasText: 'Edit Application SettingsNameValue Is Active Save Cancel Delete' }).nth(2).click();
  await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('AppSetting');
  await page.getByRole('button', { name: ' Save' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByText('\\r\\n 405 - HTTP verb used to').click();
});