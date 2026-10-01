import {test,chromium} from '@playwright/test';

async function login() {
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://sdetqa.vercel.app/login_app');
    await page.getByPlaceholder('Enter username').fill('admin');
    await page.getByPlaceholder('Enter password').fill('admin123');
    await page.locator("//input[@value='localStorage']").check();
    await page.locator("//button[@type='submit']").click();
    await context.storageState({path:'./storage-data/state.json'});
    
}

 login();

