import { webDriver, createPageContext, operation} from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { enterPage, wait5s, wait2s, wait10s, waitForElement, wait500ms } from '../../shared/universal/universal';

//Then I can go to checkout page
Then('I can go to checkout page from cart page', async function(){
    log.info("I can go to checkout page from cart page")
    wait5s
    await operation.click(pageObjects.cart.elements.cart_button_checkout)
})
//Then I can empty the cart
Then('I can empty the cart', async function(){
    log.info("Start doing empty the cart")
    await operation.click(pageObjects.cart.elements.mini_cart_icon)

    let mincartShow: boolean = await operation.isElementPresent(pageObjects.cart.elements.mini_cart_div)
    //operation.getElementsText()
    if(mincartShow){
        log.info('mini cart shown ');
        await operation.click(pageObjects.cart.elements.mini_cart_viewcart)
    }else{
        await operation.click(pageObjects.cart.elements.mini_cart_icon)
    }
    await wait5s();
    log.info("Enter shopping cart page")
    waitForElement(pageObjects.cart.elements.cart_summary)
    let cartitem: boolean = await operation.isElementPresent(pageObjects.cart.elements.cart_icon_delete)
    while(cartitem){
        log.info('cart has item, start to delete');
        await operation.click(pageObjects.cart.elements.cart_icon_delete)
        wait500ms
        cartitem= await operation.isElementPresent(pageObjects.cart.elements.cart_icon_delete)
    }
})
