import { test } from "@playwright/test";
import path from "path";
let page;
test.beforeEach(async ({browser})=>{
    page=await browser.newPage();
    await page.goto("https://demo.automationtesting.in/Frames.html");
})
test.afterEach(async ()=>{
    await page.close();
})
test.describe("frames",()=>{
   
test("single frames", async ()=>{
    // await page.goto("https://demo.automationtesting.in/Frames.html");
    // first approach
    await page.frameLocator("iframe[src='SingleFrame.html']").locator("[type='text']").fill("hello!")
    await page.screenshot({ path: "name.png"})
    await page.screenshot({ path:"images/fileupload.png"+Date.now()+"img.png"})
    await page.screenshot({ path:"images/fileupload.png"+Date.now()+"img.png", fullPage:true})
    await page.locator("//a[normalize-space()='Single Iframe']").screenshot({ path:"images/fileupload.png"+Date.now()+"img.png"})
    const allframes=await page.frames()
    console.log(allframes.length)
    // second approach [currently using approach]
    await page.frame({name:"SingleFrame"})?.locator("//input[@type='text']").fill("hi")
    await page.frame({url:"https://demo.automationtesting.in/SingleFrame.html"})?.locator("//input[@type='text']").fill("Yes")
   

})
test("nested frames", async ()=>{
    // await page.goto("https://demo.automationtesting.in/Frames.html");
    await page.getByText("Iframe with in an Iframe").click()
    // first approach
    // await page.frameLocator("iframe[src='SingleFrame.html']").locator("[type='text']").fill("hello!")
    // // second approach [currently using approach]
    // await page.frame({name:"SingleFrame"})?.locator("//input[@type='text']").fill("hi")
    const nestedframe=await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"});
    const child=(await nestedframe?.childFrames())!;
    console.log(child?.length)
    await child[0]?.locator('[type="text"]').fill("hi")
 


    

})
})