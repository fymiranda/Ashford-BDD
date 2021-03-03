import { GlobalConfig, SiteGlobalDataConfig } from "../../page-definitions/GlobalConfig";


export const globalConfig: GlobalConfig = {
    seleniumConfig: {
        waitTime: 5000,
        elementTimeOut: 40000
    },
    cucumberConfig: {
        defaultTimeOut: 600000
    },


}

export const siteGlobalDataConfig: SiteGlobalDataConfig = {
    seleniumConfig: {
        waitTime: 5000,
        elementTimeOut: 20000
    },
    cucumberConfig: {
        defaultTimeOut: 120000
    },
    storeURL: 'https://integration-5ojmyuq-5uinp4vb2gcgq.us-3.magentosite.cloud/',
    contentfulURL: 'https://integration-5ojmyuq-5uinp4vb2gcgq.us-3.magentosite.cloud/login',
    LoginPageURL: 'https://integration-5ojmyuq-5uinp4vb2gcgq.us-3.magentosite.cloud/customer/account/login',
    contentfulUsername: 'gwang@aaxiscommerce.com',
    contentfulPassword: 'acxh8@WGL',
    CreateAccountPageURL: 'https://integration-5ojmyuq-5uinp4vb2gcgq.us-3.magentosite.cloud/customer/account/create/',
    MyAccountPageURL: 'https://integration-5ojmyuq-5uinp4vb2gcgq.us-3.magentosite.cloud/customer/account/',

    // Color
    color_black_spanish: 'Negro',
    color_white_spanish: 'Blanco',

    // Storage
    storage_128gb_spanish: '128 GB',
    storage_256gb_spanish: '256 GB',

    valid_RUT_List: ['166116937'],
    valid_Phone_Number_List: ['999999999'],
    valid_Email_List:['166116937@aaxis.com'],
}
