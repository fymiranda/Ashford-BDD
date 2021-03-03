import { By } from "selenium-webdriver";
import { PageConfig } from "@aaxis/cucumber-selenium/lib/config/PageConfig";


export type LandingData = {
    emailLoginScripts: string
    passwordLoginScripts: string
}

export type LandingElementParameter = {
}


export type LandingElementDef = {
//    Contentful System - Login Page
    emailLogin: By
    passwordLogin: By
    loginButton: By
}

export type LandingConfig = PageConfig<LandingElementDef, LandingData, LandingElementParameter>