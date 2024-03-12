const { test, expect } = require('@playwright/test');
const baseURL = 'http://164.68.103.68:81';
const userName = "ernest";
const pass = "P@ssw0rd";

test.describe('Identification Types ', ()=>
{
    test.describe('Add, Edit, Search and Delete Identification types',()=>{
        test('Valid Input -All fields Provided', async({page})=>{
           await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Identification TypesManage Id').click();
           await page.getByRole('button', { name: ' Add Identification Types' }).click();
           await page.locator('div').filter({ hasText: /^New Identification Types$/ }).isVisible();
           await page.locator('div').filter({ hasText: /^Code$/ }).getByRole('textbox').fill('234');
           await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('My Identity');
           await page.getByRole('button', { name: ' Save' }).click();
           const res = await page.locator('div').filter({ hasText: 'Loaded Successfully' }).nth(1).textContent();
           console.log(res);
        });
        test('Invalid Input - Missing Name', async({page})=>{
            await page.goto(baseURL);
             // login
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
            await page.getByText('Identification TypesManage Id').click();
            await page.getByRole('button', { name: ' Add Identification Types' }).click();
            await page.locator('div').filter({ hasText: /^New Identification Types$/ }).isVisible();
            await page.locator('div').filter({ hasText: /^Code$/ }).getByRole('textbox').fill('234');
            await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('');
            await page.getByRole('button', { name: ' Save' }).click();
            const res = await page.getByText('This field is required').textContent();
            console.log(res);
         });
         test('Invalid Input - Duplicate Name or Code', async({page})=>{
            await page.goto(baseURL);
             // login
            await page.getByPlaceholder('Username').fill(userName);
            await page.getByPlaceholder('Password').fill(pass);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await page.getByRole('link', { name: ' Settings' }).click();
            await page.getByText('Identification TypesManage Id').click();
            await page.getByRole('button', { name: ' Add Identification Types' }).click();
            await page.locator('div').filter({ hasText: /^New Identification Types$/ }).isVisible();
            await page.locator('div').filter({ hasText: /^Code$/ }).getByRole('textbox').fill('234');
            await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('My Identity');
            await page.getByRole('button', { name: ' Save' }).click();
            const res = await page.locator('div').filter({ hasText: 'Loaded Successfully' }).nth(1).textContent();
            console.log(res);
         })
    });
    test('Edit Name ', async({page})=>{
        await page.goto(baseURL);
         // login
        await page.getByPlaceholder('Username').fill(userName);
        await page.getByPlaceholder('Password').fill(pass);
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.getByRole('link', { name: ' Settings' }).click();
        await page.getByText('Identification TypesManage Id').click();
        await page.getByRole('cell', { name: '234' }).nth(1).click();
        await page.getByRole('heading', { name: 'Edit Identification Types' }).isVisible();
       // await page.locator('div').filter({ hasText: /^Code$/ }).getByRole('textbox').fill('234');
        await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('My Id');
        await page.getByRole('button', { name: ' Save' }).click();
        const res = await page.locator('div').filter({ hasText: 'Loaded Successfully' }).nth(1).textContent();
        console.log(res);
     });
     test('Edit Code ', async({page})=>{
        await page.goto(baseURL);
         // login
        await page.getByPlaceholder('Username').fill(userName);
        await page.getByPlaceholder('Password').fill(pass);
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.getByRole('link', { name: ' Settings' }).click();
        await page.getByText('Identification TypesManage Id').click();
        await page.getByRole('cell', { name: '234' }).nth(1).click();
        await page.getByRole('heading', { name: 'Edit Identification Types' }).isVisible();
        await page.locator('div').filter({ hasText: /^Code$/ }).getByRole('textbox').fill('34');
       // await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('My Id');
        await page.getByRole('button', { name: ' Save' }).click();
        const res = await page.locator('div').filter({ hasText: 'Loaded Successfully' }).nth(1).textContent();
        console.log(res);
     });
     test('Delete Existing Identification Type ', async({page})=>{
        await page.goto(baseURL);
         // login
        await page.getByPlaceholder('Username').fill(userName);
        await page.getByPlaceholder('Password').fill(pass);
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.getByRole('link', { name: ' Settings' }).click();
        await page.getByText('Identification TypesManage Id').click();
        await page.getByRole('cell', { name: '449' }).click();
        await page.getByRole('heading', { name: 'Edit Identification Types' }).isVisible();
        //await page.locator('div').filter({ hasText: /^Code$/ }).getByRole('textbox').fill('34');
       // await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('My Id');
        await page.getByRole('button', { name: ' Delete' }).click();
        await page.getByLabel('Delete Item').isVisible();
        await page.getByRole('heading', { name: 'Delete Item' }).hasText('Delete Item');
        await page.getByRole('button', { name: 'Yes' }).click();
        const res = await page.locator('div').filter({ hasText: 'Loaded Successfully' }).nth(1).textContent();
        console.log(res);
     });
     test('Search By Code', async({page})=>{
        await page.goto(baseURL);
         // login
        await page.getByPlaceholder('Username').fill(userName);
        await page.getByPlaceholder('Password').fill(pass);
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.getByRole('link', { name: ' Settings' }).click();
        await page.getByText('Identification TypesManage Id').click();
        await page.getByRole('textbox', { name: 'Search by Code' }).fill('4x');
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('cell', { name: '4x' }).click();
        // const content = await page.locator('div').filter({ hasText: /^Code$/ }).getByRole('textbox').textContent();
        // console.log(content);
     })
})

