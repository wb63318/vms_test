const { test, expect } = require('@playwright/test');

test('Creation fails when the Name field is missing', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://yourwebsite.com/identification_types/new');

    // Fill in valid values for Code and Order Index
    await page.fill('#code', 'validCode');
    await page.fill('#orderIndex', '1');

    // Leave the Name field empty

    // Attempt to create the identification type
    await page.click('button[type="submit"]');

    // Verify that creation fails
    await page.waitForSelector('.error-message');
    const errorMessage = await page.textContent('.error-message');
    expect(errorMessage).toContain('Name field is required');
});
