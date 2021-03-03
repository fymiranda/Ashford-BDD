import { CommonOperation, Location, GlobalConfig } from "@aaxis/cucumber-selenium";
import { Locator, WebElementPromise, By, until, WebElementCondition, WebElement, Key } from "selenium-webdriver";
import { PrimitiveObject } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { operation, webDriver, globalConfig } from "@aaxis/cucumber-selenium/lib/config/SeleniumPageContext";
import { expect, assert } from "chai";
import { LocatorConfig } from "@aaxis/cucumber-selenium/lib/config/PageConfig";
import { log } from "@aaxis/cucumber-selenium/lib/cli/ExecContext";
import { pageObjects } from "./CommonData";
import * as fs from "fs";

//------------------------------------- Declare module

declare module "@aaxis/cucumber-selenium" {

    interface CommonOperation {
        verifyElementClickable(location: Location, replacement?: string | PrimitiveObject): Promise<boolean>
        verifyArrayValueGreaterThanX(arr: number[], x: number)
        verifyElementLocated(location: Location): Promise<boolean>
        waitUntilElementRefresh(element: Location, secondsCounter?: number): Promise<boolean>
        waitUntilCurrentURLUpdate(secondsCounter?: number): Promise<boolean>
        takeScreenshotAndSave(imageFilePath: string, imageName: string): Promise<void>
        inputViaCssSelector(input: string, cssSelector: string): Promise<void>
    }
}

CommonOperation.prototype.inputViaCssSelector = async function (input: string, cssSelector: string): Promise<void> {
    log.info(`Start - Input Text via CSS Selector`);
    let currentValue: string = await webDriver.executeScript(`return document.querySelector(\`${cssSelector}\`).getAttribute('value')`);
    log.info(currentValue);
    for (let i = 0; i < currentValue.length; i++) {
        await webDriver.findElement(By.css(cssSelector)).sendKeys(Key.BACK_SPACE);
    }
    await operation.input(By.css(cssSelector), input);
    await operation.onBlurElement(By.css(cssSelector));
    log.info(`Complete - Input Text via CSS Selector`);
}

CommonOperation.prototype.takeScreenshotAndSave = async function (imageFilePath: string, imageName: string): Promise<void> {
    log.info('****** Start take screenthot then save it ******')
    const imag: String = await webDriver.takeScreenshot()
    fs.writeFile(`${imageFilePath}${imageName}`, imag, 'base64', err => {
        if (err) log.info(err);
    })
    log.info('****** Take screenthot then save it completed ******')
}

CommonOperation.prototype.verifyElementLocated = async function (location: Location): Promise<boolean> {
    let bool: boolean
    await webDriver.findElement(location as Locator).then(function (result) {
        log.info(`Find elements: ${location}`)
        bool = true
    }).catch(function (error) {
        log.info(`Fail to find elements: ${location}`)
        bool = false
    });
    return bool
}


CommonOperation.prototype.verifyElementClickable = async function (location: Location, replacement?: string | PrimitiveObject): Promise<boolean> {
    const enable: boolean = await operation.isElementEnabled(location, replacement)
    const visible: boolean = await operation.isElementVisible(location, replacement)
    if (enable === true && visible === true) {
        return true
    } else {
        return false
    }
}

CommonOperation.prototype.verifyArrayValueGreaterThanX = function (arr: number[], x: number): boolean {
    const isBigger = (currentValue) => (currentValue) > x
    return arr.every(isBigger)
}


/***
 * 1. Get element text before wait
 * 2. Once element text is not update, continue wait 1s
 * 3. If wait time out, return false
 *  @param element
 * @param secondsCounter
 */
CommonOperation.prototype.waitUntilElementRefresh = async function (element: Location, secondsCounter?: number): Promise<boolean> {
    let endDate: Date = new Date();
    let startSecond = endDate.getSeconds();
    log.info(`****** Start second is ${startSecond}`)
    let endSecond: number = 0
    if (secondsCounter === undefined) {
        secondsCounter = pageObjects.siteGlobalData.seleniumConfig.waitTime
    }
    let sBeforeGetText: string = await operation.getText(element)
    log.info(`****** Before wait, get element text is ${sBeforeGetText} ******`)
    let sNewText: string = await operation.getText(element)
    let nTimeRange: number = endSecond - startSecond
    while (nTimeRange <= (secondsCounter / 1000)) {
        if (sNewText !== sBeforeGetText) {
            log.info('****** Element text is update *****')
            return true
        } else {
            log.info('****** Start wait 1s *****')
            await webDriver.sleep(1000)
            endSecond = new Date().getSeconds()
            log.info(`****** After wait, end second is ${endSecond} ******`)
            if (endSecond - startSecond < 0) {
                nTimeRange = (endSecond - startSecond) + 60
            } else {
                nTimeRange = endSecond - startSecond
            }
            log.info(`****** Already wait ${nTimeRange} seconds ******`)
            sNewText = await operation.getText(element)
            log.info(`****** After wait, get element text is ${sNewText} ******`)


        }
    }
    return false
}

/***
 * 1. Get current url before wait
 * 2. Once current url is not update, continue wait 1s
 * 3. If wait time out, return false
 * @param secondsCounter
 */
CommonOperation.prototype.waitUntilCurrentURLUpdate = async function (secondsCounter?: number): Promise<boolean> {
    let endDate: Date = new Date();
    let startSecond = endDate.getSeconds();
    log.info(`****** Start second is ${startSecond}`)
    let endSecond: number = 0
    if (secondsCounter === undefined) {
        secondsCounter = pageObjects.siteGlobalData.seleniumConfig.waitTime
    }
    log.info(`****** Most wait for ${secondsCounter / 1000} seconds ******`)
    let sBeforeCurrentUrl: string = await operation.getCurrentURL()
    log.info(`****** Before wait, get current url is ${sBeforeCurrentUrl} ******`)
    let sNewURL = await operation.getCurrentURL()
    let nTimeRange: number
    nTimeRange = endSecond - startSecond
    while (nTimeRange <= (secondsCounter / 1000)) {
        if (sNewURL !== sBeforeCurrentUrl) {
            log.info('****** Current URL is update *****')
            return true
        } else {
            log.info('****** Start wait 1s *****')
            await webDriver.sleep(1000)
            endSecond = new Date().getSeconds()
            log.info(`****** After wait, end second is ${endSecond} ******`)
            if (endSecond - startSecond < 0) {
                nTimeRange = (endSecond - startSecond) + 60
            } else {
                nTimeRange = endSecond - startSecond
            }
            log.info(`****** Already wait ${nTimeRange} seconds ******`)
            sNewURL = await operation.getCurrentURL()
            log.info(`****** After wait, get current url is ${sNewURL} ******`)
        }
    }
    return false
}
