import {test,expect} from '@playwright/test';

import fs from 'fs';

test.describe.configure({mode:'serial'});

test('Get cookies',async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://sdetqa.vercel.app/login_app');
    await page.getByPlaceholder('Enter username').fill('admin');
    await page.getByPlaceholder('Enter password').fill('admin123');
    //await page.locator("//input[@value='cookie']").check();
    await page.locator("//button[@type='submit']").click();
    await expect(page.getByText(' Active session')).toBeVisible();
    const cookies=await context.cookies();
    console.log(cookies);
    fs.writeFileSync("./storage-data/cookies.data.json",JSON.stringify(cookies,null,2));

})

test('setCookies',async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
   const cookies=JSON.parse(fs.readFileSync('./storage-data/cookies.data.json','utf-8'));
   await context.addCookies(cookies);
   await page.goto('https://sdetqa.vercel.app/login_app');
   await expect(page.getByText(' Active session')).toBeVisible();

})

test('Get local storage from storage state',async({browser})=>{

    const context=await browser.newContext({storageState:'./storage-data/state.json'});
    const page=await context.newPage();
    await page.goto('https://sdetqa.vercel.app/login_app');
    await expect(page.getByText(' Active session')).toBeVisible();


});