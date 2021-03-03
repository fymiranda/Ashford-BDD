import { webDriver, operation, createPageContext } from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { enterPage, wait5s, wait2s, wait10s,wait500ms,waitForPageLoad,waitForElement, waitElementLoad, wait30s } from '../shared/universal/universal';
import { By } from "selenium-webdriver";


export async function LoginFromLoginPage(email:string, password:string) {
    
    await enterPage(pageObjects.universal.elements.login_link + 'customer/account/login')
    operation.waitUntilPageLoad()
    wait5s

    await operation.clearAndInputText(email, pageObjects.login.elements.login_username)
    await operation.clearAndInputText(password, pageObjects.login.elements.login_password)
    await webDriver.sleep(100)
    await waitForElement(pageObjects.login.elements.login_submit)
    await operation.click(pageObjects.login.elements.login_submit)
    wait10s
  
    await assert.equal( waitForElement(pageObjects.login.elements.Welcome_name), true, 'Error - Does not login successfully!')
    log.info(email + 'Login successfully!')
}