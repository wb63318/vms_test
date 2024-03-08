const {test, expect} = require('@playwright/test');
import { base, faker } from '@faker-js/faker';

const url1 = 'https://www.google.com';
const url2 = 'http://www.bing.com';
const url3 = 'https://rahulshettyacademy.com/loginpagePractise/';
// const search = page.locator(#sb_form_q);


// for page context
test('First Playwright Test', async ({page})=>
{
    //
    await page.goto(url1);
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    

    
});

// browser context 
test('demo1',async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url2);
    console.log(await page.title());
    const searchBoxSelector = 'input[name="q"]';
    await page.fill(searchBoxSelector, 'Ghana');
    //console.log(await page.locator())


   
})
test('demo2',async({page})=>
{

});

test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
});

const baseURL = 'http:/yuor-application-url';

test.describe('ApplicationSettings', ()=> 
{
    test('Create new setting with valid input', async ({page})=> 
    {
        await page.goto(baseUrl);

        await page.fill('input[name= "name"]', 'NewSetting');

        await page.fill('input[name="value"]','123');

        await page.click('button#create-button');

        expect(await page.isVisible('div#new-setting')).toBeTruthy();

    });

    test('Attempt to create setting with missing name', async ({page})=> 
    {
        await page.goto(baseUrl);

        

        await page.fill('input[name="value"]','123');

        await page.click('button#create-button');

        expect(await page.isVisible('div#new-setting')).toBeTruthy();

    });

} );

test('test', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByLabel('Search', { exact: true }).click();
    await page.getByLabel('Search', { exact: true }).fill('Ghana');
    await page.locator('div').filter({ hasText: /^Ghana$/ }).click({
      button: 'right'
    });
    await page.locator('div').filter({ hasText: /^Ghana$/ }).click();
    await page.getByRole('link', { name: 'Ghana Wikipedia https://en.' }).click();
    await page.getByRole('button', { name: 'Toggle History subsection' }).click();
    await page.getByRole('link', { name: 'Operation Cold Chop and' }).click();
  });

  // test using faker js to input data

  test('demo 4', async({page})=>
  {
        await page.goto(url1);
        const query = faker.lorem.words();

        const input = await page.locator('input[name="q"]').first();
        await input.type(query);

        await input.press('Enter');

        await page.waitForNavigation();

        console.log(`Search performed for query: ${query}`);

        

  });