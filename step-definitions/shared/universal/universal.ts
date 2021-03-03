import {
    webDriver,
    operation,
    createPageContext,
    pageContext
} from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { By } from "selenium-webdriver";

export async function randomNum(minNum: number, maxNum: number): Promise<number> {
    return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(),10);
}

export async function waitForPageLoad(pageTitle: string): Promise<boolean> {
    await webDriver.sleep(500);
    let pageReady:string = await operation.statusOfPageLoad();
    let pageLoadTimeout: number = 500;
    while(pageReady!=="complete" && pageLoadTimeout <= pageObjects.siteGlobalData.seleniumConfig.elementTimeOut)
    {
        await webDriver.sleep(500);
        pageLoadTimeout += 500;
        pageReady = await operation.statusOfPageLoad();
    }
    if (pageLoadTimeout <= pageObjects.siteGlobalData.seleniumConfig.elementTimeOut) {
        log.info(`Enter page ${pageTitle} successfully!!!`);
        return true;
    }
    else {
        log.error(`Fail to enter page ${pageTitle}!!!`);
        return false;
    }
}

export async function waitForElement(pageElement: By): Promise<boolean> {
    await webDriver.sleep(500);
    let pageReady:boolean = await operation.isElementPresent(pageElement);
    let pageLoadTimeout: number = 500;
    while(!pageReady && pageLoadTimeout <= pageObjects.siteGlobalData.seleniumConfig.elementTimeOut)
    {
        await webDriver.sleep(500);
        pageLoadTimeout += 500;
        pageReady = await operation.isElementPresent(pageElement);
    }
    if (pageLoadTimeout <= pageObjects.siteGlobalData.seleniumConfig.elementTimeOut) {
        log.info(`Wait Element ${pageElement} successfully!!!`);
        return true;
    }
    else {
        log.error(`Fail to wait Element ${pageElement}!!!`);
        return false;
    }
}
export async function waitElementLoad():  Promise<boolean>{
    waitElementLoad
    return true;
}

export async function enterContentfulSystem(): Promise<void> {
    await operation.openURLAndMaxWindow(pageObjects.siteGlobalData.contentfulURL);
    let pageReady:string = await operation.statusOfPageLoad();
    while(pageReady !== 'complete')
    {
        await webDriver.sleep(30000);
        pageReady = await operation.statusOfPageLoad();
    }
    log.info('---------------------------');
    log.info(pageReady);
    log.info('---------------------------');

    await webDriver.executeScript(pageObjects.landing.data.emailLoginScripts);
    await webDriver.executeScript(pageObjects.landing.data.passwordLoginScripts);

    await webDriver.executeScript(`document.querySelector('[name="commit"]').click()`);
    await webDriver.sleep(10000);
}

export async function enterPage(pageURL: string): Promise<void> {
    await operation.openURLAndMaxWindow(pageURL);
    await webDriver.sleep(500);
    let pageReady:string = await operation.statusOfPageLoad();
    let pageLoadTimeout: number = 500;
    while(pageReady !== 'complete' && pageLoadTimeout <= pageObjects.siteGlobalData.seleniumConfig.elementTimeOut)
    {
        await webDriver.sleep(500);
        pageLoadTimeout += 500;
        pageReady = await operation.statusOfPageLoad();
    }
    if (pageLoadTimeout <= pageObjects.siteGlobalData.seleniumConfig.elementTimeOut) {
        log.info(`Open store ${pageURL} successfully!!!`);
    }
    else {
        log.error(`Fail to open page ${pageURL}!!!`);
    }
}

export async function verifyHomepageTopBanner(): Promise<void> {
    log.info("Verify whether top banner exists on home page!!!");
    assert.equal(await operation.isElementPresent(pageObjects.homepage.elements.topBanner), true, 'Error - Top banner does not exist on homepage!!!');
}


export async function wait1s(): Promise<void> {
    await webDriver.sleep(1000);
}

export async function wait2s(): Promise<void> {
    await webDriver.sleep(2000);
}

export async function wait5s(): Promise<void> {
    await webDriver.sleep(5000);
}

export async function wait10s(): Promise<void> {
    await webDriver.sleep(10000);
}

export async function wait15s(): Promise<void> {
    await webDriver.sleep(15000);
}

export async function wait20s(): Promise<void> {
    await webDriver.sleep(20000);
}

export async function wait30s(): Promise<void> {
    await webDriver.sleep(30000);
}

export async function wait500ms(): Promise<void> {
    await webDriver.sleep(500);
}

export async function restartBrowser(): Promise<void> {
    await webDriver.manage().deleteAllCookies();
    await webDriver.close();
    await createPageContext();
}

When('I access the home page', async function () {
    await restartBrowser();
    await enterPage(pageObjects.siteGlobalData.storeURL);
})

Then('I can see top banner for home page', async function () {
    await verifyHomepageTopBanner();
})

