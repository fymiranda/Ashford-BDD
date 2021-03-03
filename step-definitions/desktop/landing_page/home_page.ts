import { webDriver, operation, createPageContext } from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { enterPage, wait5s, wait2s, wait10s } from '../../shared/universal/universal';

//When I access the home page
When('I access the home page', async function(){
    await enterPage(pageObjects.siteGlobalData.storeURL)
    wait5s
})

//Then I can go to corresponding handset PDP
Then('I can go to corresponding handset PDP', async function(){
    await wait5s();
    assert.equal(await operation.isElementPresent(pageObjects.pdp.elements.pdp_breadcrumb), true, 'Error - Failed to go to handset PDP from home page recommended handsets!!!');
})

//And I can see productlist
Then('I can see productlist', async function(){
    await wait5s();
    assert.equal(await operation.isElementPresent(pageObjects.homepage.elements.productlist), true, 'Error - Failed to view the product list on homepage!!!');
})
