import { test,expect } from '@playwright/test';


test.only('has title', async ({ page }) => {
    console.log("this is my first test")
})

test.skip('has title2', async ({ page }) => {
    test.skip()
    console.log("this is my first test")
})


test.fixme('has title3', async ({ page }) => {
    test.fixme() //has some issue in the code
    console.log("this is my first test")
})


test.fail('has title4', async ({ page,browserName }) => {
    if(browserName==='firefox'){
    test.fail()
    }
    console.log("this is my first test")
})


test('has title5', async ({ page }) => {
    test.slow() //will triple the default timeout from configuration
    test.setTimeout(5000)
    console.log("this is my first test",{TIMEOUT:3000})
})

test.fail('has title6', async ({ page,browserName }) => {
    test.fail()
    expect(2).toBe(1)
    console.log("this is my first test")
})

//annotations 

test('has title6@smoke', async () => {
    console.log("this is my first test")
})

test('has title6@sanity@reg', async () => {
    console.log("this is my first test")
})
test('has title6@slow@fixme', async () => {
    console.log("this is my first test")
})



// to execute it use --grep tagname on cmnd prompt
// to exclude the particular tag and execute use --grep-invert tagname to be excluded on cmnd prompt


