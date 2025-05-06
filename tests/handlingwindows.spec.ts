import {test,chromium, expect} from "@playwright/test";
test("handling multiple window",async ()=>{
const browser=await chromium.launch();
const context=await browser.newContext();
const page1=await context.newPage();
await page1.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")
await expect(page1).toHaveTitle("Window Handles Practice - H Y R Tutorials")
await page1.setViewportSize({
    width:1920,
    height:1040
})
// const promise=await context.waitForEvent("page")
// await page1.locator("#newTabBtn").click()
// const val=promise
const page1Promise =page1.waitForEvent('popup');
// await page1.getByRole('button', { name: 'Open New Tab' }).click();
const allpages=context.pages()
console.log(allpages.length)
await page1.locator("#newTabBtn").click()
const mypage=await page1Promise;
await expect(mypage).toHaveURL("https://www.hyrtutorials.com/p/alertsdemo.html")

const page1promise2=page1.waitForEvent("popup");
await page1.locator("#newWindowBtn").click()
const mypage2=await page1promise2
await mypage2.setViewportSize({
    width:1920,
    height:1040
})
const loc=((await page1promise2).locator("//a[@style='display: block']/img"))!

if(loc){
    console.log("the text of img is",await loc.getAttribute("alt"))
}

await page1.waitForTimeout(5000)
await context.close()

})