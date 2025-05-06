import { test,expect } from "@playwright/test";
test("dialogue handling simple alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.setViewportSize({
            width:2000,
            height:3407
        });
        
   //enabling dialogue window handler  //dialogue window handler     
   await page.on('dialog', async dialogue=>{
await expect(dialogue.type()).toBe('alert')
await expect(dialogue.message()).toBe('I am an alert box!')//we can use tocontain method also
await dialogue.accept()//we can use tocontain method also
   })
   await page.locator("//button[@id='alertBtn']").click()
   await page.waitForTimeout(5000)
   await page.close()
})
 
test("confirmation alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.setViewportSize({
            width:2000,
            height:3407
        });
        
   //enabling dialogue window handler  //dialogue window handler     
   await page.on('dialog', async dialogue=>{
await expect(dialogue.type()).toContain('confirm')
await expect(dialogue.message()).toContain('Press a button!')//we can use tocontain method also
await dialogue.accept()//we can use tocontain method also
// await dialogue.dismiss()
   })
   await page.locator("//button[@id='confirmBtn']").click()
   await expect(page.locator("#demo")).toHaveText("You pressed OK!")
   await page.waitForTimeout(5000)
   await page.close()
})

test("prompt alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.setViewportSize({
    //         width:2000,
    //         height:3407
    //     });
        
   //enabling dialogue window handler  //dialogue window handler     
   await page.on('dialog', async dialogue=>{
await expect(dialogue.type()).toContain('prompt')
await expect(dialogue.message()).toContain('Please enter your name:')//we can use tocontain method also
await dialogue.accept("saranya")//we can use tocontain method also
// await dialogue.dismiss()
   })
   await page.locator("//button[@id='promptBtn']").click()
   await expect(page.locator("#demo")).toContainText("saranya")
   await page.waitForTimeout(5000)
   await page.close()
})