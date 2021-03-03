
export type SiteGlobalDataConfig = {

    seleniumConfig: SeleniumConfig
    cucumberConfig: CucumberConfig
    storeURL: string
    MyAccountPageURL: string

    // Contentful System
    contentfulURL: string
    contentfulUsername: string
    contentfulPassword: string

    // color
    color_black_spanish: string
    color_white_spanish: string

    // storage
    storage_128gb_spanish: string
    storage_256gb_spanish: string

    valid_RUT_List: string[]
    valid_Phone_Number_List: string[]
    valid_Email_List: string[]

    // Register & Login
    LoginPageURL: string
    CreateAccountPageURL: string
}

export type SeleniumConfig = {
    waitTime: number
    elementTimeOut: number
}

export type CucumberConfig = {
    defaultTimeOut: number
}

export type GlobalConfig = {

    seleniumConfig: SeleniumConfig
    cucumberConfig: CucumberConfig

}
