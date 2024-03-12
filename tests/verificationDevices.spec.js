const { test, expect } = require('@playwright/test');
const baseURL = 'http://164.68.103.68:81';
const userName = "ernest";
const pass = "P@ssw0rd";


test.describe('Verification Devices ', ()=>
{
    test.describe('Add Verification Devices',()=>{
        test('Valid Input -All fields Provided', async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Verification DevicesManage').click();
           await page.getByRole('button', { name: ' Add Verification Device' }).click();
           await page.locator('div').filter({ hasText: /^IMEI$/ }).getByRole('textbox').fill('300901767311562');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('619');
           await page.getByRole('button', { name: ' Save' }).click();
        });
        //!
        test('Invalid Input -Missing IMEI', async({page})=>{
           await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Verification DevicesManage').click();
           await page.getByRole('button', { name: ' Add Verification Device' }).click();
           await page.locator('div').filter({ hasText: /^IMEI$/ }).getByRole('textbox').fill('');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('619');
           await page.getByRole('button', { name: ' Save' }).click();
        });
        //!
        test('Invalid Input -Missing ID-Code', async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Verification DevicesManage').click();
           await page.getByRole('button', { name: ' Add Verification Device' }).click();
           await page.locator('div').filter({ hasText: /^IMEI$/ }).getByRole('textbox').fill('300901767311562');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('');
           await page.getByRole('button', { name: ' Save' }).click();
        });
        //!
        test('Invalid Input -Duplicate IMEI', async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Verification DevicesManage').click();
           await page.getByRole('button', { name: ' Add Verification Device' }).click();
           await page.locator('div').filter({ hasText: /^IMEI$/ }).getByRole('textbox').fill('300901767311562');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('619');
           await page.getByRole('button', { name: ' Save' }).click();
        });
        //!
        test('Invalid Input - Duplicate IdCode', async({page})=>{
            await page.goto(baseURL);
            // login
           await page.getByPlaceholder('Username').fill(userName);
           await page.getByPlaceholder('Password').fill(pass);
           await page.getByRole('button', { name: 'LOGIN' }).click();
           await page.getByRole('link', { name: ' Settings' }).click();
           await page.getByText('Verification DevicesManage').click();
           await page.getByRole('button', { name: ' Add Verification Device' }).click();
           await page.locator('div').filter({ hasText: /^IMEI$/ }).getByRole('textbox').fill('300901767311562');
           await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('619');
           await page.getByRole('button', { name: ' Save' }).click();
        })
    });
    //!
    test('Valid Input - Edit IMEI', async({page})=>{
        await page.goto(baseURL);
        // login
       await page.getByPlaceholder('Username').fill(userName);
       await page.getByPlaceholder('Password').fill(pass);
       await page.getByRole('button', { name: 'LOGIN' }).click();
       await page.getByRole('link', { name: ' Settings' }).click();
       await page.getByText('Verification DevicesManage').click();
       await page.getByRole('cell', { name: '2.' }).click();
       //await page.getByRole('button', { name: ' Add Verification Device' }).click();
       const edit = await page.getByRole('heading', { name: 'Edit Verification Devices' }).textContent();
       console.log(edit);
       await page.locator('div').filter({ hasText: /^IMEI$/ }).getByRole('textbox').fill('982838908192789');
       await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('916');
       await page.getByRole('button', { name: ' Save' }).click();
       
    });
    //!
    test('Valid Input - Edit IdCode', async({page})=>{
        await page.goto(baseURL);
        // login
       await page.getByPlaceholder('Username').fill(userName);
       await page.getByPlaceholder('Password').fill(pass);
       await page.getByRole('button', { name: 'LOGIN' }).click();
       await page.getByRole('link', { name: ' Settings' }).click();
       await page.getByText('Verification DevicesManage').click();
       await page.getByRole('cell', { name: '2.' }).click();
       //await page.getByRole('button', { name: ' Add Verification Device' }).click();
       const edit = await page.getByRole('heading', { name: 'Edit Verification Devices' }).textContent();
       console.log(edit);
       await page.locator('div').filter({ hasText: /^IMEI$/ }).getByRole('textbox').fill('982838908192789');
       await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('897');
       await page.getByRole('button', { name: ' Save' }).click();
       
    });
    //!
    test('Valid Input - Edit to Duplicate IMEI or IdCode', async({page})=>{
        await page.goto(baseURL);
        // login
       await page.getByPlaceholder('Username').fill(userName);
       await page.getByPlaceholder('Password').fill(pass);
       await page.getByRole('button', { name: 'LOGIN' }).click();
       await page.getByRole('link', { name: ' Settings' }).click();
       await page.getByText('Verification DevicesManage').click();
       await page.getByRole('cell', { name: '2.' }).click();
       //await page.getByRole('button', { name: ' Add Verification Device' }).click();
       const edit = await page.getByRole('heading', { name: 'Edit Verification Devices' }).textContent();
       console.log(edit);
       await page.locator('div').filter({ hasText: /^IMEI$/ }).getByRole('textbox').fill('982838908192789');
       await page.locator('div').filter({ hasText: /^Identification Code$/ }).getByRole('textbox').fill('916');
       await page.getByRole('button', { name: ' Save' }).click();
       // console.log(res);
    });
    test('Valid Input - Delete Existing Device', async({page})=>{
        await page.goto(baseURL);
        // login
       await page.getByPlaceholder('Username').fill(userName);
       await page.getByPlaceholder('Password').fill(pass);
       await page.getByRole('button', { name: 'LOGIN' }).click();
       await page.getByRole('link', { name: ' Settings' }).click();
       await page.getByText('Verification DevicesManage').click();
       await page.getByRole('cell', { name: '982838908192789' }).click();
       //await page.getByRole('button', { name: ' Add Verification Device' }).click();
       const del = await page.locator('div').filter({ hasText: /^IMEI$/ }).getByRole('textbox').textContent();
       console.log(del);
       await page.getByRole('button', { name: ' Delete' }).click();
       await page.getByLabel('Delete Item').isVisible();
       await page.getByRole('button', { name: 'Yes' }).click();
       const res = await page.getByText('Bad Request: {"errors":{"id').textContent();
       console.log(res);
       await page.getByRole('button', { name: 'Cancel' }).click();
       
    });
    test('Valid Input - Search By Valid IMEI', async({page})=>{
        await page.goto(baseURL);
        // login
       await page.getByPlaceholder('Username').fill(userName);
       await page.getByPlaceholder('Password').fill(pass);
       await page.getByRole('button', { name: 'LOGIN' }).click();
       await page.getByRole('link', { name: ' Settings' }).click();
       await page.getByText('Verification DevicesManage').click();
       await page.getByRole('button', { name: 'Toggle Dropdown' }).click();
       await page.getByPlaceholder('IMEI').fill('123');
       await page.getByRole('button', { name: 'Search' }).click();
       const res = await page.getByRole('cell', { name: '123', exact: true }).textContent();
       console.log(res);
       
    });
    test('Valid Input - Search By Valid IDCode', async({page})=>{
        await page.goto(baseURL);
        // login
       await page.getByPlaceholder('Username').fill(userName);
       await page.getByPlaceholder('Password').fill(pass);
       await page.getByRole('button', { name: 'LOGIN' }).click();
       await page.getByRole('link', { name: ' Settings' }).click();
       await page.getByText('Verification DevicesManage').click();
       await page.getByRole('textbox', { name: 'Search by ID Code' }).fill('1234');
       await page.getByRole('button', { name: '' }).click();
       const res = await page.getByRole('cell', { name: '1234' }).textContent();
       console.log(res);


       
       
    })

})
