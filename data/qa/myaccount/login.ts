import { IScenarioData, PLACE_HOLDER, PageConfig } from "@aaxis/cucumber-selenium";
import { By } from "selenium-webdriver";
import { LoginConfig, LoginElementDef, LoginElementParameter, LoginData } from "../../../page-definitions/myaccount/login";

const featureData: IScenarioData[] = [

]

const data: LoginData = {

}

const elementParameter: LoginElementParameter = {
}
export const login: LoginElementDef = {
    login_username: By.css(`input[name="login[username]"]`),
    login_password: By.css(`input[name="login[password]"]`),
    login_submit: By.css(`button[class="action login primary"]`),
    CreateAccountButton: By.css(`button[title="Create an Account"]`),
    CreateAccount_FirstName: By.css('input[name="firstname"]'),
    CreateAccount_LastName: By.css('input[name="lastname"]'),
    CreateAccount_email: By.xpath('//*[@id="email_address"]'),
    CreateAccount_password: By.css(`input[name="password"]`),
    CreateAccount_confirmPassword: By.css(`input[name="password_confirmation"]`),
    CreateSuccess_message:  By.css('[class="message-success success message"]'),
    
    //header welcome
    Welcome_name: By.xpath('/html/body/div[2]/header/div[1]/div/div/div[2]/div[2]/a[1]/span[2]')
}

export const pageConfig: LoginConfig = new PageConfig({
    data: data,
    elements: login,
    featureData: featureData,
    elementData: elementParameter
});