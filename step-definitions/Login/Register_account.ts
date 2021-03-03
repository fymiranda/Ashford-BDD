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

// Given I was on create account page.
Given('I was on create account page', async function(){
      await enterPage(pageObjects.siteGlobalData.CreateAccountPageURL)
      //assert.equal(await operation.isElementPresent(pageObjects.login.elements.CreateAccountButton), true, 'Error - This is not create account page.');
})

//I enter first name "<first name>"
Then('I enter first name {string}', async function(first_name: string) {
     await waitForElement(pageObjects.login.elements.CreateAccount_FirstName)
     await  operation.input(pageObjects.login.elements.CreateAccount_FirstName, first_name)
      
})

//I enter last name "<last name>"
Then('I enter last name {string}', async function(last_name: string) {
     await waitForElement(pageObjects.login.elements.CreateAccount_LastName)
     await operation.input(pageObjects.login.elements.CreateAccount_LastName, last_name)
       
 })

//Then I enter the email address
Then('I enter the email address', async function(){
     await waitForElement(pageObjects.login.elements.CreateAccount_email)
      let date = new Date()
      let symbol = date.getDay().toString() +date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString()
      let email_address:string = 'miranda@' + symbol + '.com'
      log.info("This is new customer's email " + email_address)
     await operation.input(pageObjects.login.elements.CreateAccount_email, email_address)
}) 

//Then I enter password "<Password>"
Then('I enter password {string}', async function(Password: string) {
     await operation.input(pageObjects.login.elements.CreateAccount_password, Password)
      
})

//Then I enter confirm password "<confirm_password>"
Then('I enter confirm password {string}', async function(confirm_password: string) {
     await waitForElement(pageObjects.login.elements.CreateAccount_confirmPassword)
     await operation.input(pageObjects.login.elements.CreateAccount_confirmPassword, confirm_password) 
     wait5s    
})

//Then I click creat an account button
When('I click creat an account button', async function(){
     await waitForElement(pageObjects.login.elements.CreateAccountButton)
     await operation.click(pageObjects.login.elements.CreateAccountButton);
     log.info('After click create account button, current page is? '+ await operation.getCurrentURL())
     wait5s
})

//Then I was taken to my account page
Then('I was taken to my account page', async function(){
  //let   MyAccountPageURL:String  = pageObjects.siteGlobalData.MyAccountPageURL
  log.info('This is my account page? '+ await operation.getCurrentURL())
  assert.equal(await operation.getCurrentURL(), pageObjects.siteGlobalData.MyAccountPageURL, 'Error- failed to go to my account page!') 
  wait5s

} )

//And I see a registration successfully message
Then('I see a registration successfully message', async function(){
    let message1 = 'Thank you for registering with Ashford.com.'
     assert(await operation.getText(pageObjects.login.elements.CreateSuccess_message), message1, 'Erroc- create account failed!')
})