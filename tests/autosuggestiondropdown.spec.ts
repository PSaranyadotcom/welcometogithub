import { Locator, test } from "@playwright/test";
test("date picker", async ({page})=>{
    await page.goto("https://www.google.com/");
    await page.getByRole('combobox').click()
    // 
    await page.getByRole('combobox').fill("bus stop")
    await page.waitForSelector("//div[@class='wM6W7d']//span[contains(text(),'top')]")
    const text=await page.$$("//div[@class='wM6W7d']//span[contains(text(),'top')]");
    for(const val of text){
        console.log(await val.textContent())
        await val.click()
        await page.waitForTimeout(2000)
    }
await page.close()

     })