import { test } from "@playwright/test";
test("date picker", async ({page})=>{
    await page.goto("https://jqueryui.com/datepicker/");
    const datepicker=await page.locator('iframe').contentFrame().locator('#datepicker')
    await page.locator('iframe').contentFrame().locator('#datepicker').click();
    await datepicker.fill("04/05/2025")
    await page.waitForTimeout(3000)
    let date:string="26";
    let year:string="2003";
    let month:string="March";
    let locmon:string;
    let locyear:string;
   
    while(true){
        locmon=(await page.locator('iframe').contentFrame()!.locator('.ui-datepicker-month').textContent())!;
        locyear=(await page.locator('iframe').contentFrame()!.locator('.ui-datepicker-year').textContent())!;
        
        if( locmon == month && locyear == year){
            break;

        }
        await page.locator('iframe').contentFrame()!.locator("[title='Prev']").click();

    }
   
    await page.waitForTimeout(5000);
// Access the iframe's content
const frame = await page.locator('iframe').contentFrame();
// if (!frame) throw new Error('Frame not found');

// Get all elements inside the frame
const arr = await frame.locator("//a[@class='ui-state-default']").all();

// Loop through elements and click the one that matches the date
for (const val of arr) {
  if ((await val.textContent()) === date) {
    await val.click();
    break;
  }
}

// Optional: Wait and close the page if needed
await page.waitForTimeout(5000);
// await frame.locator('//a[@class='ui-state-default'][text()='${date}']').click()
await page.close()
})
