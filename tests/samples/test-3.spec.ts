import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://164.68.103.68:81/');
  await page.goto('http://164.68.103.68:81/#/');
  await page.goto('http://164.68.103.68:81/#/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('ernest');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('P@ssw0rd');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('link', { name: ' Settings' }).click();
  await page.locator('.card-body > div:nth-child(2)').first().click();
  await page.getByRole('button', { name: 'Toggle Dropdown' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('decet');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('main').click();
});