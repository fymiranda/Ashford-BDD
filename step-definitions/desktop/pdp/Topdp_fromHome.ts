import { webDriver, operation, createPageContext } from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { enterPage, wait5s, wait2s, wait10s,wait500ms,waitForPageLoad,waitForElement, waitElementLoad, wait30s } from '../../shared/universal/universal';
import { By } from "selenium-webdriver";


//I was on the home page
Given('I was on the home page', async function(){
    await enterPage(pageObjects.siteGlobalData.storeURL)
    wait5s
})

//I can see productlist
Then('I can see productlist', async function(){
   let configuredPLP:boolean = await operation.isElementPresent(pageObjects.homepage.elements.productlist)
   assert.equal(configuredPLP, true, 'Error - Does not configure plp on home page!')
})

//I click first one product name
Then('I click first one product name', async function(){
    await operation.isElementPresent(pageObjects.homepage.elements.first_product_name)
    let ItemName: string = await operation.getText(pageObjects.homepage.elements.first_product_name)
    let SplitItemName:string[] = ItemName.split("")
    let Num:number = SplitItemName.length-1 
    let skuId:string = SplitItemName[Num]
    await operation.click(pageObjects.homepage.elements.first_product_name)
    wait5s
    
})

//I was taken to this product detail page
Then('I was taken to this product detail page', async function(){
   assert.equal(await operation.isElementPresent(pageObjects.pdp.elements.pdp_add_to_cart_button), true, 'Error - Does not go to PDP successfully')
})