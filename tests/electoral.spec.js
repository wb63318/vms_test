const { test, expect } = require('@playwright/test');
const baseURL = 'http://164.68.103.68:81';

const userName = "ernest";
const pass = "P@ssw0rd";

//! Get error or success  message  and console log it 

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
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('button', { name: ' Add Electoral Areas' }).click();
          
           await codeField;
           await nameField;
           await constitutency;
           await constitutencySelect;
           await save;
           
           
        });
        test('Name Field Missing',async({page})=>{
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
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('button', { name: ' Add Electoral Areas' }).click();
          
           await codeField;
           await nameField;
           await constitutency;
           await constitutencySelect;
           await save;
           
        });
        test('Invalid Input - Special Characters In Name',async({page})=>{
            // fields
            const site = page.goto(baseURL);
            const codeField = page.locator('div').filter({ hasText: /^Code$/ }).getByRole('textbox').fill('');
            const nameField = page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('@$5&');
            const notes = page.locator('textarea').fill('');
            const constitutency = page.locator('span').nth(2).click();
            const constitutencySelect = page.getByRole('option', { name: 'SEKONDI' }).first().click();
            const save = page.getByRole('button', { name: ' Save' }).click();
           await site;
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('button', { name: ' Add Electoral Areas' }).click();
          
           await codeField;
           await nameField;
           await constitutency;
           await constitutencySelect;
           await save;
           
        });

        test('Create An Existing Electoral Area',async({page})=>{
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
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('button', { name: ' Add Electoral Areas' }).click();
          
           await codeField;
           await nameField;
           await constitutency;
           await constitutencySelect;
           await save;
           
        });
        test('Missing Constituency Field',async({page})=>{
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
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('button', { name: ' Add Electoral Areas' }).click();
          
           await codeField;
           await nameField;
           await constitutency;
           await constitutencySelect;
           await save;
           
        });
        test('Search By Electorate Name',async({page})=>{
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
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('button', { name: ' Add Electoral Areas' }).click();
          
           await page.getByRole('button', { name: 'Toggle Dropdown' }).click();
           await page.getByPlaceholder('Name').click();
           await page.getByPlaceholder('Name').press('CapsLock');
           await page.getByPlaceholder('Name').fill('TAKINTA');
           await page.getByRole('button', { name: 'Search' }).click();
           await page.getByRole('cell', { name: 'TAKINTA' }).first().click();
           await page.getByRole('button', { name: 'Cancel' }).click();
           
        });
        test('Search For a non-existing electoral name',async({page})=>{
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
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('button', { name: ' Add Electoral Areas' }).click();
          
           
           
        });
        test('Delete An Electoral Area',async({page})=>{
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
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('button', { name: ' Add Electoral Areas' }).click();
           await page.getByRole('cell', { name: 'ENOSE' }).first().click();
           await page.getByRole('button', { name: ' Delete' }).click();
           await page.getByRole('button', { name: 'Yes' }).click();
          
           await codeField;
           await nameField;
           await constitutency;
           await constitutencySelect;
           await save;
           
        });
        test('Cancel a delete Action',async({page})=>{
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
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Electoral AreasManage').click();
           await page.getByRole('cell', { name: 'ENOSE' }).first().click();
           await page.getByRole('button', { name: ' Delete' }).click();
           await page.getByRole('button', { name: 'No' }).click();

           
           
        })
    })
})
