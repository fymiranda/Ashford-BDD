import { CommonOperation, Location, GlobalConfig } from "@aaxis/cucumber-selenium";
import { webDriver, operation, createPageContext } from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement, By } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import {enterPage, wait10s, wait15s, wait1s, wait20s, wait500ms, wait5s, wait2s, wait30s} from "./universal";

//Scenario Outline: User can view header on browser page
//Given I am on a browse page "{string}"
Given('I am on a browse page {string}', async function(page_url: string){
    log.info('get into page ' + {page_url});
    await enterPage(pageObjects.siteGlobalData.storeURL + page_url);
})

// Given I was login the store "<customer_info>"
Given('I was login the store {string}', async function(customer_info: string){
    await enterPage(pageObjects.siteGlobalData.storeURL)
    wait30s
    await operation.click(pageObjects.universal.elements.login_bar)
    wait30s
    log.info("Given I was login the store "+customer_info)
    let login: string[]=customer_info.split(",")
    await operation.clearAndInputText(login[0],pageObjects.login.elements.login_username),
    await operation.clearAndInputText(login[1],pageObjects.login.elements.login_password),
    await operation.click(pageObjects.login.elements.login_submit);

})
//When I check page content
When('I check page content', async function(){
    log.info('check the header contents of page');
})

//Then I can see header info
Then('I can see header info', async function(){
    assert.equal(await operation.isElementPresent(pageObjects.universal.elements.header), true, 'Error - Failed to find header!!!');
})


//Scenario Outline: User can go to home page from header on browse page
//Given I am on a browse page "<page_url> except home page"
Given('I am on a browse page {string} except home page', async function(page_url: string){
    log.info('get into page ' + page_url);
    await enterPage(pageObjects.siteGlobalData.storeURL + page_url);
})

//When I click the site logo on header
When('I click the site logo on header', async function(){
    await operation.click(pageObjects.universal.elements.site_logo);
    //await operation.navigateTo()
    await wait5s();
})

//Scenario Outline: User can go to shopping cart from header on browse page
//Given I am on a browse page "<page_url>" except shopping cart page
Given('I am on a browse page {string} except shopping cart page', async function(page_url: string){
    log.info('get into page ' + {page_url});
    await enterPage(pageObjects.siteGlobalData.storeURL + page_url);
})

//When I click minicart link on header
When('I click minicart link on header', async function(){
    await operation.click(pageObjects.universal.elements.cart_block);
    await wait10s();
})

//When I search product by "<sku_id>"
When('I search product by {string}', async function(sku_id: string){
    log.info('I search product');
    await operation.click(pageObjects.universal.elements.search_label);
    wait2s
    await operation.input(pageObjects.universal.elements.search_input, sku_id);
    await operation.click(pageObjects.universal.elements.search_button);
    await wait10s();
})

//Then I can back to home page
Then('I can back to home page', async function(){
    assert.equal(await operation.isElementPresent(pageObjects.homepage.elements.topBanner), true, 'Error - Failed to back to home page!!!')
})

//Then I can go to shopping cart page
Then('I can go to shopping cart page', async function(){
    let mincartShow: boolean = await operation.isElementPresent(pageObjects.cart.elements.mini_cart_div)
    if(mincartShow){
        log.info('mini cart shown ');
        await operation.click(pageObjects.cart.elements.mini_cart_viewcart)
    }else{
        await operation.click(pageObjects.cart.elements.mini_cart_icon)
    }
    await wait5s();
    assert.equal(await operation.isElementPresent(pageObjects.cart.elements.cart_title), true, 'Error - Failed to get into shopping cart page!!!')
})

//Then I see the product "<sku_id>" in search result page
Then('I see the product {string} in search result page', async function(sku_id: string){

})

//Scenario Outline: User can see browse footer on browse page
//Given I am on a "<page>"
Given('I am on a page {string}', async function(page_url: string){
    log.info('get into page ' + {page_url});
    await enterPage(pageObjects.siteGlobalData.storeURL + page_url);
})

//When I scroll down to the end of the page
When('I scroll down to the end of the page', async function(){
    let footerOut: boolean = await operation.isElementPresent(pageObjects.universal.elements.footer);
    if(footerOut){
        await operation.scrollScreenToElement(pageObjects.universal.elements.footer);
        log.info('Get to footer section successfully!!!');
        await wait2s();
    }else{
        assert.fail('Cannot find footer!!!');
    }
})

//Then I should be able to see footer there
Then('I should be able to see footer there', async function(){
    assert.equal(await operation.isElementPresent(pageObjects.universal.elements.footer_logo), true, 'Error - cannot see site logo in footer!!!');
})

