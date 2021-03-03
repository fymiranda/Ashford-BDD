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


//Given I am a login user
Given('I am a login user', async function(){
   let pageURL:string = await enterPage(pageObjects.siteGlobalData.storeURL)
   await enterPage(pageURL)
    wait5s
    assert.equal(await waitForElement(pageObjects.plp.elements.plp_browseProductListSection), true, 'Error - There is no PLP, access PLP failed!')
})

//When I mouse over on one product card
When('I mouse over on one product card', async function(){
  await operation.moveToElement(pageObjects.plp.elements.plp_searchResultSection)
})

//Then I can see quick view icon
Then('I can see quick view icon', async function(){
  await operation.moveToElement(pageObjects.plp.elements.plp_searchResultSection)
  assert.equal(await operation.isElementPresent(pageObjects.plp.elements.plp_quickViewButton), true, 'Error - There is no quick view button on PLP!')
  await operation.click(pageObjects.plp.elements.plp_quickViewButton)
  wait5s
  assert.equal(await operation.isElementPresent(pageObjects.plp.elements.plp_quickViewPopup), true, 'Error - Quick view popup does not display!')
  wait5s
})

// Then I was taken to PDP by clicking the Go to product button
Then('I was taken to PDP by clicking the Go to product button', async function(){
  assert.equal(await operation.isElementPresent(pageObjects.plp.elements.quickView_GoToPDPButton), true, 'Error - Go to PDP button does not display on Quick view popup!')  
  
  await operation.isElementPresent(pageObjects.homepage.elements.first_product_name)
    let SkuInfo: string = await operation.getText(pageObjects.plp.elements.quickView_SkuId)
    let Sku:string[] = SkuInfo.split(":")
    let SkuId:string = Sku[Sku.length-1].trim()
    
    await operation.click(pageObjects.plp.elements.quickView_GoToPDPButton)
    wait5s

    let currentPageUrl:string = await operation.getCurrentURL()
    assert.equal(currentPageUrl.includes(SkuId+'.html'), true, 'Error - Does not go to PDP successfully')
  
})


  