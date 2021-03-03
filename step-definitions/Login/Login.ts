import { webDriver, operation, createPageContext } from '@aaxis/cucumber-selenium/lib/config/SeleniumPageContext';
import { pageObjects } from '../common/CommonData';
import { Then, When, Given } from 'cucumber'
import { WebElement } from 'selenium-webdriver'
import { expect, assert } from 'chai';
import '../common/custom-operation';
import { log } from '@aaxis/cucumber-selenium/lib/cli/ExecContext';
import { sleep } from "@aaxis/cucumber-selenium/lib/common/TypeScriptUtils";
import { enterPage, wait5s, wait2s, wait10s,wait500ms,waitForPageLoad,waitForElement, waitElementLoad, wait30s } from '../shared/universal/universal';
import { By } from "selenium-webdriver";

//Given An anonymous user on login page
Given('An anonymous user on home page', async function(){
  
  await enterPage(pageObjects.siteGlobalData.storeURL)
  wait5s

  await waitForElement(pageObjects.universal.elements.login_link)
  await operation.click(pageObjects.universal.elements.login_link)
  wait5s
  let URL:string = await operation.getCurrentURL()
  if(URL.includes("customer/account/login")){
    log.info('I am now on login page!')
  }
  else{
    log.info('This is not login page!')
  } 
}) 

//When I enter the email address 'email_address'
When('I enter the email address {string}', async function(email_address: string){
  await waitForElement(pageObjects.login.elements.login_username)
  await operation.input(pageObjects.login.elements.login_username, email_address)  
  wait5s
}) 

//Then I enter login password 'password'
Then('I enter login password {string}', async function(password: string){ 
  await waitForElement(pageObjects.login.elements.login_password)
  await operation.input(pageObjects.login.elements.login_password, password)  
  wait5s
})

//Then I can login successfully
Then('I can login successfully', async function(){
  await waitForElement(pageObjects.login.elements.login_submit)
  await operation.click(pageObjects.login.elements.login_submit)
  wait5s

  if( waitForElement(pageObjects.login.elements.Welcome_name)){
    log.info('Login successfully!')
  }
  else{
    log.info('Does not login successfully!')
  }
})