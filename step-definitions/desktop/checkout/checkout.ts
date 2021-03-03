import { webDriver, operation, createPageContext } from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { enterPage, wait5s, wait2s, wait10s,wait500ms,waitForPageLoad,waitForElement, waitElementLoad, wait30s } from '../../shared/universal/universal';
import { By } from "selenium-webdriver";

//    Then I can enter the guest email
Then('I can enter the guest email', async function(){
    let date=new Date()
    let timestrap: string=date.getMonth().toString()+date.getDate().toString()+date.getHours().toString()+date.getMinutes().toString()+date.getSeconds().toString()
    log.info("I can enter the guest email "+timestrap)
    let guestEmail:string= "karinzhang"+timestrap+"@aaxischina.com"
    //wait page loading the email field finished
    waitForElement(pageObjects.checkout.elements.login_input_email)
    waitForElement(pageObjects.checkout.elements.checkout_div_summary)
    await operation.input(pageObjects.checkout.elements.login_input_email,guestEmail)
})

/*
    firstname0,lastname1,country2,state3,city4,stree1_5,stree2_6,zipCode7,phone8
    karin,zhang,United States,California,Los Angeles,1900 Avenue of the Stars,Suite 555,90067,12122
*/ 
//   Then I can input the shipping address <>
Then('I can input the shipping address {string}', async function(shipping_address: string){
    waitForPageLoad("Checkout")
    log.info("I can input the shipping address "+shipping_address)
   
    // Address format: firstname0,lastname1,country2,state3,city4,stree1_5,stree2_6,zipCode7,phone8
    let address:string[]=shipping_address.split(",")
    await operation.input(pageObjects.checkout.elements.shipping_input_firstName,address[0])
    await operation.input(pageObjects.checkout.elements.shipping_input_lastName,address[1])
    await operation.click(pageObjects.checkout.elements.shipping_select_country)

    let country: By = By.xpath("//option[. = '"+address[2]+"']")
    await operation.click(country)
    wait2s
    await operation.click(pageObjects.checkout.elements.shipping_select_state)
    let state: By = By.xpath("//option[. = '"+address[3]+"']")
    await operation.click(state)
    wait2s
    await operation.input(pageObjects.checkout.elements.shipping_input_city,address[4])
    await operation.input(pageObjects.checkout.elements.shipping_input_streeAdress1,address[5])
    await operation.input(pageObjects.checkout.elements.shipping_input_streeAdress2,address[6])
    await operation.input(pageObjects.checkout.elements.shipping_input_zipCode,address[7])
    await operation.input(pageObjects.checkout.elements.shipping_input_phone,address[8])
})

/**
 xpath=//input[@value='conus_ground_conus_ground']
 */
//   Then I can select shipping method "<shipping_method>"
Then('I can select shipping method {string}', async function(shipping_method: string){
    log.info("I can select shipping method "+shipping_method)
    let shipping_str: string ="conus_ground_conus_ground"
    switch (shipping_method){
        case "Ground":
       {shipping_str="conus_ground_conus_ground";
        break;} 
        case "Second Day Air":
        {shipping_str="conus_2ndday_conus_2ndday";
        break;}
        case "Next Day Air":
       { shipping_str="conus_nextday_conus_nextday";
        break;}
    }
    //let method: By = By.xpath("//input[value='"+shipping_str+"']")
    let method: By = By.css("input[class='radio'][value='"+shipping_str+"']")
    //  //input[value="conus_ground_conus_ground"]
    await webDriver.findElement(method)
    waitForElement(method)
    waitForElement(pageObjects.checkout.elements.checkout_div_summary)
    await operation.click(method)
    wait2s
})

//    Then I can go to checkout billing page
Then('I can go to checkout billing page', async function(){
    await operation.click(pageObjects.checkout.elements.checkout_button_goToBilling)
    wait2s
})

//   Then I can checkout with CC 
Then('I can checkout with CC {string}', async function(card_info: string){
    wait10s
    //carNo0,expirMon1,expirYy2,cvv3
    let card:string[]=card_info.split(",")
    wait5s
    await operation.click(pageObjects.checkout.elements.billing_radio_cc)
    wait2s

    let element:WebElement[]=await webDriver.findElements(pageObjects.checkout.elements.billing_input_cardNo)
    log.info("Credit card number element =============lenth===="+element.length)

    waitForElement(pageObjects.checkout.elements.billing_input_cardNo)

    await operation.input(pageObjects.checkout.elements.billing_input_cardNo,card[0])

    await operation.click(pageObjects.checkout.elements.billing_select_expirMon)
    //let month: By = By.css("option[value='"+card[1]+"']")
    let month: By = By.xpath("//option[. = '02 - February']")
    await operation.click(month)

    await operation.click(pageObjects.checkout.elements.billing_select_expirYy)
    let yy: By = By.xpath("//option[. = '"+card[2]+"']")
    await operation.click(yy)

    await operation.input(pageObjects.checkout.elements.billing_input_cvv,card[3])
    
    await operation.click(pageObjects.checkout.elements.checkout_button_placeOrder)
    
})

//   Then I can checkout with PaymentMethod "<payment_method>"
Then('I can checkout with PaymentMethod {string}', async function(payment_method: string){
    await operation.click(pageObjects.checkout.elements.checkout_international_payment)
    wait10s
    switch (payment_method){
        case "Alipay":
        await operation.click(pageObjects.checkout.elements.billing_radio_alipay);
        await operation.click(pageObjects.checkout.elements.checkout_button_alipay_placeOrder);
        break;
        case "Wechat":
        await operation.click(pageObjects.checkout.elements.billing_radio_wechat);
        await operation.click(pageObjects.checkout.elements.checkout_button_wechat_placeOrder);
        break;
        case "Unoinpay":
        await operation.click(pageObjects.checkout.elements.billing_radio_unionpay);
        await operation.click(pageObjects.checkout.elements.checkout_button_unionpay_placeOrder);
        break;
    }    
})