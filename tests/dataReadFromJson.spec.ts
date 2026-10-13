import {test,expect} from '@playwright/test';
import fs from 'fs';

const data=JSON.parse(fs.readFileSync('testdata/data.json','utf-8'));

test.describe("data driven testing using json file",async()=>{
for(const {username,password} of data){

test(`data read from json file: ${username}`,async({page})=>{
    
await page.goto('https://demowebshop.tricentis.com/login');
await page.locator('#Email').fill(username);
await page.locator('#Password').fill(password);
await page.locator('input[value="Log in"]').click();

});



}

});