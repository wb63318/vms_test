const { chromium } = require('playwright');

async function login(userName ="ernest", pass ="P@ssw0rd") {
   const browser = await chromium.launch();
   const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://164.68.103.68:81/#/login/');

  // Fill in the username and password fields
  await page.getByPlaceholder('Username').fill(userName);
  await page.getByPlaceholder('Password').fill(pass);
  

  // Click the login button
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Wait for navigation to complete
  await page.waitForNavigation();

  // Check if login was successful
  if (page.url() === 'http://164.68.103.68:81/dashboard') {
    console.log('Login successful!');
  } else {
    console.log('Login failed. Please check your username and password.');
  }
// await browser.close();
  
}

module.exports = login;
