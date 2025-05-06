const { chromium } = require('playwright');
const MailosaurClient = require('mailosaur');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const mailosaur = new MailosaurClient('w7NnTh8VkiGQxPgj8Wc7UrV5TuyK3aYa');

  // Navigate to your sign-up page and perform sign-up actions
  await page.goto('https://mailosaur.com/app/login?redirect=%2Fapp%2Fkeys');
  // ... fill in sign-up form and submit
  await page.locator(".email").fill("saranyaprakash444@gmail.com")
  
  await page.locator(".password").fill("Saru@123")

  // Wait for the verification email
  const email = await mailosaur.messages.get('hk8isybh', {
    sentTo: 'your-email@example.com'
  });

  // Extract the verification link from the email
  const verificationLink = email.html.links[0].href;

  // Navigate to the verification link
  await page.goto(verificationLink);

  // Perform any additional actions after verification
  // ...

  await browser.close();
})();
