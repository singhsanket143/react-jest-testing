import { test, expect } from '@playwright/test';


test('should render the button', async ( { page }) => {
    await page.goto('/'); // Go to the home page
    await page.waitForSelector('button'); // Wait for the button to be rendered
    // take a screenshot
    const screenshot = await page.screenshot({ path: `screenshots/ss-${page.viewportSize().width}.png` });

    await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});
