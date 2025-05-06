import { test,expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto("https://portal.2k.com/en/2k/signin?client_id=506fb5c28b2945feb4008d7973a30f3a&lang=en&redirect_uri=https%3A%2F%2Fportal.2k.com%2F&state=fea02264-6cab-49c8-ab78-b25ce13063b9");
await page.getByText("Log in to your 2K Account").hover()
await page.getByText("Log in to your 2K Account").dblclick()
await page.keyboard.press("Control+c")
await page.locator("#email").press("Control+v") //combination of 2 keys
await page.locator("#password").press("Control+v")
await page.keyboard.down("Enter")  //single key like enter and backspace
await page.close()

}) 