import { IScenarioData, PLACE_HOLDER, PageConfig } from "@aaxis/cucumber-selenium";
import { By } from "selenium-webdriver";
import { LandingData, LandingElementParameter, LandingElementDef, LandingConfig } from "../../../page-definitions/landing_page/landing_page";

const featureData: IScenarioData[] = [

]

const data: LandingData = {
    emailLoginScripts: `document.getElementById('user_email').value = "gwang@aaxiscommerce.com"`,
    passwordLoginScripts: `document.getElementById('user_password').value = "acxh8@WGL"`
}

const elementParameter: LandingElementParameter = {

}

export const LandingPages: LandingElementDef = {
//    Contentful System - Login Page
    emailLogin: By.css(`#user_email`),
    passwordLogin: By.css(`#user_password`),
    loginButton: By.css(`input[type='submit']`)
}

export const pageConfig: LandingConfig = new PageConfig({
    data: data,
    elements: LandingPages,
    featureData: featureData,
    elementData: elementParameter
});