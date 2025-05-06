import { test,expect } from "@playwright/test";
import path from "path";
// import { describe } from "node:test";
test.describe("tests",()=>{
test.skip("this is my test", async ({page})=>{
await page.goto("https://www.west-wind.com/wconnect/wcscripts/fileupload.wwd");
await page.locator("//input[@id='upload']").click()
await page.locator("//input[@id='upload']").setInputFiles("images/fileupload.png")
await expect(page.locator("#filename")).toContainText("fileupload.png")
// await expect(page.locator("div#filename br:nth-child(1)")).toHaveText("fileupload.png")
await page.waitForTimeout(3000)
await page.close()

})
test("multiple files",async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("//input[@type='file']").click()
    const filepath=path.resolve("C:/Users/sharanyap/Downloads/playwright-bdd/playwright-bdd/package.json") //uploading from explorer
    await page.locator("//input[@type='file']").setInputFiles(filepath)
    await page.waitForTimeout(3000)
    await page.locator("//input[@type='file']").setInputFiles(['images/fileupload.png','images/constant.ts'])
    await page.waitForTimeout(8000)
    await page.locator("//input[@type='file']").setInputFiles(['images/fileupload.png']) //removes particular file
    await page.waitForTimeout(3000)
    await expect(page.locator("#fileList li:nth-child(1)")).toHaveText("fileupload.png")
    await expect(page.locator("#fileList li:nth-child(2)")).toHaveText("constant.ts")
    await page.locator("//input[@type='file']").setInputFiles([]) //removes all file 
    await page.waitForTimeout(3000)
    await expect(page.locator("#fileList li")).toHaveText("No Files Selected")
    await page.close()

})
})