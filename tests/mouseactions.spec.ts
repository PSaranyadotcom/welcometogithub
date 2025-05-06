import { test,expect } from "@playwright/test";
import { strict } from "assert";
test("mouse actions", async ({page})=>{
    await page.goto("https://playwright.dev/");
    const b=await page.getByText("Get started");
    await b.hover()
    await b.click({button:"right"})


})
test("dbl click", async ({page})=>{
    await page.goto("https://qa-practice.netlify.app/double-click");
    await page.locator("#double-click-btn").dblclick()
    await expect(page.locator("#double-click-result")).toHaveText("Congrats, you double clicked!")
    await page.close()

})

test("drag nd drop", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   const src= await page.locator("#draggable")
    const dest=await page.locator("#droppable")
    await src.dragTo(dest);//approach 1
    await page.setViewportSize({
        height:1000,
        width:1200
    });
    //slider operations
   const slider= await page.locator('#slider-range span').first()
   slider.focus()
   for(let i=0;i<100;i++){
    await page.keyboard.press("ArrowRight");
   }

    await src.hover(); //approach 2
    await page.mouse.down()
    await dest.hover()
    await page.mouse.up()
    await page.waitForTimeout(6000)
    await page.close()

})

test("keyboard actions", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
})