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
import { wait15s } from '../../shared/universal/universal';


//Then I can click product name in cart to PDP
Then('I can click product name in cart to PDP', async function(){
  await waitForElement(pageObjects.cart.elements.itemName_first) 
  let itemUrl:string = await operation.getAttribute(pageObjects.cart.elements.itemName_first, 'herf')

  await operation.click(pageObjects.cart.elements.itemName_first)
  wait10s
  
    assert.equal(await operation.getCurrentURL(), itemUrl, 'Error - Does not go to PDP successfully!')
})





  