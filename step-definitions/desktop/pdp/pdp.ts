import { webDriver, operation, createPageContext } from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { enterPage, wait5s, wait2s, wait10s } from '../../shared/universal/universal';

//Then I can add product to cart from PDP
Then('I can add product to cart from PDP', async function(){
    await wait5s();
    assert.equal(await operation.isElementPresent(pageObjects.pdp.elements.pdp_add_to_cart_button), true, 'Error - Failed to go to PDP!!!');

    await operation.click(pageObjects.pdp.elements.pdp_add_to_cart_button)
    await wait5s();
})

