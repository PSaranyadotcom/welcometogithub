import { test,expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto("https://techcanvass.com/Examples/multi-select.html?srsltid=AfmBOoqVF-TIx7fEI_p97IIj8P1dvAkNUN--KBUSSHjzq5RlFN9f07p1");
    // await page.locator("#multiselect").selectOption(['Volvo','Audi'])
    const text=await page.locator("#multiselect")
    const cmp=await page.locator("#multiselect").textContent()
    const optionname=await page.locator("#multiselect option")
    expect(await cmp?.includes("Honda")).toBeTruthy()
    expect.soft(await cmp?.includes("Hi")).toBeTruthy()
    const options = await text.locator("option").all();
    expect(options.length).toBe(6)
    await expect(optionname).toHaveCount(6)
    for(let name of options){
        const names=await name.textContent();
console.log(names)
    
    if(names?.includes('Opel') ||names?.includes("Hyundai")){
        await text.selectOption(names);
        // await name.click()
    }
    }
    await page.waitForTimeout(8000);
    await page.close();
   

})

