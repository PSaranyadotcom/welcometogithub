import { test,expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    await page.getByRole('button', { name: 'AGREE' }).click();
    await page.locator(".multiselect").click()
    const name=await page.locator("ul li label input")
    expect(name).toHaveCount(11)
    expect((await page.$$("ul li label input")).length).toBe(11)
    const val=await page.$$("ul li label")
    for(const text of val){
        const mytext=await text.textContent()
        console.log(await text.textContent())
        if(mytext?.includes("jQuery") || mytext?.includes(" Bootstrap")){
await text.click();
        }
        if(mytext?.includes(" HTML") || mytext?.includes("CSS")){
            await text.click();
                    }
    }
    await page.waitForTimeout(3000)
    await page.close()
    // await page.getByRole('button', { name: 'HTML, CSS' }).click();



})