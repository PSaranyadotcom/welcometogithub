import { test } from "@playwright/test";
test("this is my test", async ({page})=>{
await page.goto("https://portal.2k.com/")

await page.locator("#email").fill("nabas@gmail.com")
await page.locator("#Password").fill("wew3r4")
await page.getByText("Keep me logged in").uncheck()

})