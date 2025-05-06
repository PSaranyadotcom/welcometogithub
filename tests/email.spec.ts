import { test } from '@playwright/test';

import { MailiskClient } from 'mailisk';

test("date picker", async ({page})=>{
  
  const mailisk = new MailiskClient({ apiKey: '0a4f708641a5ccfcead36da438ce073a7d782d04eb3b4ef5e0133ee3a939611e' });

  // Navigate to your sign-up page and perform sign-up actions
  await page.goto('https://app.mailslurp.com/login');
  await page.locator("//input[@id='email']").fill("saranyaprakash444@gmail.com")
  // await page.locator("//input[@id='password']").fill("Saru@123")
  await page.locator("//button[@type='submit']").click()
  await page.waitForTimeout(3000)
  // ... fill in sign-up form and submit

  // Wait for the verification email
  const emails:any = await mailisk.searchInbox('Test');

  // Extract the verification link from the email


    const verificationLink =await emails.data[0].html.links[0].href


  // Navigate to the verification link
  await page.goto(verificationLink);

  // Perform any additional actions after verification
  // ...

  await page.close();
})

