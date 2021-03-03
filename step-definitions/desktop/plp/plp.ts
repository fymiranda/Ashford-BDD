import { webDriver, operation, createPageContext } from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { enterPage, wait5s, wait2s, wait10s,waitForPageLoad, waitElementLoad } from '../../shared/universal/universal';

//Then I can add product to cart from PLP
Then('I can add product to cart from PLP', async function(){
    await wait5s();
    assert.equal(await operation.isElementPresent(pageObjects.plp.elements.plp_searchResultSection), true, 'Error - Failed to find the search result!!!');

    await operation.mouseOverToElement(pageObjects.plp.elements.plp_searchResultSection)
    await operation.mouseOverToElement(pageObjects.plp.elements.plp_body)
 
    await operation.mouseOverToElement(pageObjects.plp.elements.plp_searchResult_addToCart)
    await operation.mouseOverToElement(pageObjects.plp.elements.plp_body)

})
//Then I can go to PDP from PLP
Then('I can go to PDP from PLP', async function(){
    waitForPageLoad("PLP")
    await operation.click(pageObjects.plp.elements.plp_searchResultSection)

})

