import { By } from "selenium-webdriver";
import { PageConfig } from "@aaxis/cucumber-selenium/lib/config/PageConfig";


export type CheckoutData = {

}

export type CheckoutElementParameter = {
}


export type CheckoutElementDef = {
    login_input_email: By
    login_input_pass: By
    checkout_div_summary:By
    shipping_input_firstName: By
    shipping_input_lastName: By
    shipping_input_streeAdress1: By
    shipping_input_streeAdress2: By
    shipping_input_city: By
    shipping_select_state: By
    shipping_input_zipCode: By
    shipping_select_country: By
    shipping_input_phone: By

    shipping_method_ground: By
    checkout_button_goToBilling: By

    billing_radio_cc:By
    billing_input_cardNo:By
    billing_select_expirMon: By
    billing_select_expirYy:By
    billing_input_cvv: By

    billing_radio_paypal:By
    billing_radio_afirm:By

    checkout_international_payment: By
    billing_radio_alipay:By
    billing_radio_wechat:By
    billing_radio_unionpay:By

    checkout_button_placeOrder:By
    checkout_button_alipay_placeOrder:By
    checkout_button_wechat_placeOrder:By
    checkout_button_unionpay_placeOrder:By

}

export type CheckoutConfig = PageConfig<CheckoutElementDef, CheckoutData, CheckoutElementParameter>