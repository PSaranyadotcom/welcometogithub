import {test} from "@playwright/test"

test("this is test1", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator("//table[@id='productTable']").scrollIntoViewIfNeeded()
const head=await page.$$("//table[@id='productTable']/ancestor::div[3]/child::h2/following::tr[1]/child::th")
console.log(await head.length);
for(const val of head){
    console.log(await val.textContent())
}
const body=await page.$$("//table[@id='productTable']/tbody/tr/td")
console.log(body.length)
for(const val of body){
    console.log(await val.textContent())
}
const rows= await page.locator("//table[@id='productTable']/tbody/tr")
await call(page,rows,"Wireless Earbuds")
console.log(await rows.count())
const matchr=rows.filter({
    has:page.locator("td"),
    hasText:"Laptop"
})
await matchr.locator("input").check()
async function call(page,rows,name){
    const matchr=rows.filter({
        has:page.locator("td"),
        hasText:name
    })
    await matchr.locator("input").check()
}
const pages=await page.locator("//ul[@id='pagination']/li/a");

for(let p=0;p<await pages.count(); p++){
    if(p>0){
        await pages.nth(p).click()

    }
for(let i=0;i<await rows.count();i++){
    await rows.nth(i)
    const tds=rows.locator("td")

    for(let j=0;j<await tds.count()-1;j++){
        console.log(await tds.nth(j).textContent())
    }
}

}

})

