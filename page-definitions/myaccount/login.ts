import { By } from "selenium-webdriver";
import { PageConfig } from "@aaxis/cucumber-selenium/lib/config/PageConfig";


export type LoginData = {

}

export type LoginElementParameter = {
}


export type LoginElementDef = {
    login_username: By
    login_password: By
    login_submit: By
    CreateAccountButton: By
    CreateAccount_FirstName: By
    CreateAccount_LastName: By
    CreateAccount_email: By
    CreateAccount_password: By
    CreateAccount_confirmPassword: By
    CreateSuccess_message: By
    Welcome_name: By
}

export type LoginConfig = PageConfig<LoginElementDef,LoginData,LoginElementParameter>
