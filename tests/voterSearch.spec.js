const { test, expect } = require('@playwright/test');
const baseURL = 'http://164.68.103.68:81';
const userName = "ernest";
const pass = "P@ssw0rd";

test.describe('Voter Search (Simple Search) ',()=>{
    test('Search by Valid Voter Id', async({page})=>{
        //vist page to login
        await page.goto(baseURL);
        // login
await page.getByPlaceholder('Username').fill(userName);
await page.getByPlaceholder('Password').fill(pass);
await page.getByRole('button', { name: 'LOGIN' }).click();
//await page.getByRole('link', { name: ' Voter Search' }).click();
await page.getByRole('link', { name: ' Voter Search' }).click();
await page.getByText('Simple SearchSearch for a').click();
await page.getByPlaceholder('Search by Voter Id').fill('3333300087');
await page.getByRole('button', { name: '' }).click();
await page.locator('.card-body').first().screenshot({ path: 'screenshot.png',fullPage: true });

    });
test('Invalid Input - Non-existing voter ID', async({page})=>{

     //vist page to login
     await page.goto(baseURL);
     // login
await page.getByPlaceholder('Username').fill(userName);
await page.getByPlaceholder('Password').fill(pass);
await page.getByRole('button', { name: 'LOGIN' }).click();
//await page.getByRole('link', { name: ' Voter Search' }).click();
await page.getByRole('link', { name: ' Voter Search' }).click();
await page.getByText('Simple SearchSearch for a').click();
await page.getByPlaceholder('Search by Voter Id').fill('3333300080');
await page.getByRole('button', { name: '' }).click();
const res = await page.getByText('No Voter Record Found for the');
const view = await res.textContent();
console.log(view);
})
} );