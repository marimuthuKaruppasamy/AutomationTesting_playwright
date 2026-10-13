import {test,expect} from '@playwright/test';




const data:string[]=["laptop","mobile","tablet"];

const datas:string[][]=[["manomithran201224@gmail.com","Manobhairav@20"],["manokohli@gmail.com","Manokohli@20"],["manojain@gmail.com","Manojain@20"]];

test.describe("data driven testing",async()=>{

for(const value of data){

test(`data read from array using for loop: ${value}`,async({page})=>{
await page.goto('https://demowebshop.tricentis.com/login');
await page.locator('#Email').fill('manomithran201224@gmail.com');
await page.locator('#Password').fill('Mannobhairav@20');
await page.locator('input[value="Log in"]').click();
await page.locator('#small-searchterms').fill(value);
});
}

//--------------------------------------------------------------------------------------




 data.forEach((value)=>{
test(`data read from array using forEach loop: ${value}`,async({page})=>{
  
await page.goto('https://demowebshop.tricentis.com/login');
await page.locator('#Email').fill('manomithran201224@gmail.com');
await page.locator('#Password').fill('Mannobhairav@20');
await page.locator('input[value="Log in"]').click();
await page.locator('#small-searchterms').fill(value);
});

  })  

  //----------------------------------------------------------------


  for(const [username,password] of datas){

test(`using two diamensional array: ${username}`,async({page})=>{
    
await page.goto('https://demowebshop.tricentis.com/login');
await page.locator('#Email').fill(username);
await page.locator('#Password').fill(password);
await page.locator('input[value="Log in"]').click();

});
    
}
//-----------------------------------------------






});






