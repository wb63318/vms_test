const { test, expect } = require('@playwright/test');
const baseURL = 'http://164.68.103.68:81';

const userName = "ernest";
const pass = "P@ssw0rd";


test.describe('Electoral Area ', ()=>
{
    test.describe('Creating An Electoral Area',()=>{
        test('Valid Input -All fields Provided', async({page})=>{

            // fields
            const site = page.goto(baseURL);
            const codeField = page.locator('div').filter({ hasText: /^Code$/ }).getByRole('textbox').fill('');
            const nameField = page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('');
            const notes = page.locator('textarea').fill('');
            const constitutency = page.locator('span').nth(2).click();
            const constitutencySelect = page.getByRole('option', { name: 'SEKONDI' }).first().click();
            const save = page.getByRole('button', { name: ' Save' }).click();
           await site;
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('button', { name: ' Add Electoral Areas' }).click();
          
           await codeField;
           await nameField;
           await constitutency;
           await constitutencySelect;
           await save;
           
           
        });
        test('Missing Constituency Field',async({page})=>{
            const site = page.goto(baseURL);
            await site;
            
        })
    })
})
