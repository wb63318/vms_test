const { test, expect } = require('@playwright/test');
const baseURL = 'http://164.68.103.68:81';
const userName = "ernest";
const pass = "P@ssw0rd";

test.describe('Registration Devices ', ()=>
{
    test.describe('Add Registration and Edit Devices',()=>{
        test('Valid Input -All fields Provided', async({page})=>{
            //vist page to login
     await page.goto(baseURL);
     // login
    await page.getByPlaceholder('Username').fill(userName);
    await page.getByPlaceholder('Password').fill(pass);
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.getByRole('link', { name: ' Settings' }).click();
    await page.getByText('Registration DevicesManage').click();
    await page.getByRole('button', { name: ' Add Registration Device' }).click();
    await page.locator('div').filter({ hasText: /^Serial Number$/ }).getByRole('textbox').fill('7890WGH0');
    await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('GHN0000');
    await page.getByRole('button', { name: ' Save' }).click();
   
        });
        test('Invalid Input -Missing Serial Number',async({page})=> {
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();
           await page.getByRole('button', { name: ' Add Registration Device' }).click();
           await page.locator('div').filter({ hasText: /^Serial Number$/ }).getByRole('textbox').fill('');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('GHN0000');
           await page.getByRole('button', { name: ' Save' }).click();
        });
        test('Invalid Input -Missing Id Code',async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();
           await page.getByRole('button', { name: ' Add Registration Device' }).click();
           await page.locator('div').filter({ hasText: /^Serial Number$/ }).getByRole('textbox').fill('7890WGH0');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('');
           await page.getByRole('button', { name: ' Save' }).click();
        });
        test('Invalid Input - Duplicate Serial Number',async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();
           await page.getByRole('button', { name: ' Add Registration Device' }).click();
           await page.locator('div').filter({ hasText: /^Serial Number$/ }).getByRole('textbox').fill('7890WGH0');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('GHN0001');
           await page.getByRole('button', { name: ' Save' }).click();
        });
        test('Invalid Input - Duplicate ID Code', async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();
           await page.getByRole('button', { name: ' Add Registration Device' }).click();
           await page.locator('div').filter({ hasText: /^Serial Number$/ }).getByRole('textbox').fill('7890WGH3');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('GHN0000');
           await page.getByRole('button', { name: ' Save' }).click();
        });
        test('Invalid Input - Special Charaters in Serial Number', async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();
           await page.getByRole('button', { name: ' Add Registration Device' }).click();
           await page.locator('div').filter({ hasText: /^Serial Number$/ }).getByRole('textbox').fill('7890WGH@0');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('GHN0020');
           await page.getByRole('button', { name: ' Save' }).click();
        });
        test('Invalid Input - Special Characters in Id Code',async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();

        });
        test('Valid Input - Edit Id Code',async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();
            
        });
        test('Valid Input - Edit Serial Number',async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();
            
        });
        test('Invalid Input - Edit to Duplicate Serial Number',async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();
            
        });
        test('Invalid Input - Edit to Duplicate  Id Code',async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Registration DevicesManage').click();
            
        })
    });
    test('Verify that an existing Registration Device can be succesfully fetched ffrom the system by IdCode' ,async({page})=>{
        await page.goto(baseURL);
        // login
       await page.getByPlaceholder('Username').fill(userName);
       await page.getByPlaceholder('Password').fill(pass);
       await page.getByRole('button', { name: 'LOGIN' }).click();
       await page.getByRole('link', { name: ' Settings' }).click();
       await page.getByText('Registration DevicesManage').click();

    });
    test('Verify that an existing RegistrationDevice can be successfully fetched from the system by Serial Number',async({page})=>{
        await page.goto(baseURL);
        // login
       await page.getByPlaceholder('Username').fill(userName);
       await page.getByPlaceholder('Password').fill(pass);
       await page.getByRole('button', { name: 'LOGIN' }).click();
       await page.getByRole('link', { name: ' Settings' }).click();
       await page.getByText('Registration DevicesManage').click();
            
    })
})