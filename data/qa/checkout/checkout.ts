import { IScenarioData, PLACE_HOLDER, PageConfig } from "@aaxis/cucumber-selenium";
import { By } from "selenium-webdriver";
import { CheckoutConfig, CheckoutElementDef, CheckoutElementParameter, CheckoutData } from "../../../page-definitions/checkout/checkout";

const featureData: IScenarioData[] = [

]

const data: CheckoutData = {
 }

const elementParameter: CheckoutElementParameter = {
}
export const checkout: CheckoutElementDef = {
    login_input_email: By.css(`input[name="username"][id="customer-email"][type="email"]`),
    login_input_pass: By.css(`#pass`),
    checkout_div_summary: By.css('div[class="product-item-name-block"]'),
    shipping_input_firstName:By.css(`input[name="firstname"]`),
    shipping_input_lastName: By.css(`input[name="lastname"]`),
    shipping_input_streeAdress1: By.css(`input[name="street[0]"]`),
    shipping_input_streeAdress2: By.css(`input[name="street[1]"]`),
    shipping_input_city: By.css(`input[name="city"]`),
    shipping_select_state: By.css(`select[name="region_id"]`),
    shipping_input_zipCode: By.css(`input[name="postcode"]`),
    shipping_select_country: By.css(`select[name="country_id"]`),
    shipping_input_phone: By.css(`input[name="telephone"]`),

    shipping_method_ground: By.css(`input[type="radio"][value="conus_ground_conus_ground"]`),

    checkout_button_goToBilling: By.css(`button[class="button action continue primary"]`),

    billing_radio_cc: By.css(`input[type="radio"][id="cardknox"]`),
    billing_input_cardNo: By.css('iframe[data-ifields-id="card-number"]'),
    billing_select_expirMon: By.css(`div[class="field no-label month"]`),
    billing_select_expirYy: By.css(`div[class="field no-label year"]`),
    billing_input_cvv: By.css(`iframe[data-ifields-id="cvv"]`),

    billing_radio_paypal: By.css(`input[type="radio"][id="paypal_express"]`),
    billing_radio_afirm: By.css(`input[type="radio"][id="affirm_gateway"]`),

    checkout_international_payment: By.css(`div[id="international-payment-methods"]`),
    billing_radio_alipay: By.css(`input[type="radio"][id="nihaopay_payments_alipay"]`),
    billing_radio_wechat: By.css(`input[type="radio"][id="nihaopay_payments_wechatpay"]`),
    billing_radio_unionpay: By.css(`input[type="radio"][id="nihaopay_payments_unionpay"]`),

    checkout_button_placeOrder: By.css(`div._active:nth-child(3) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > button:nth-child(1)`),
    checkout_button_alipay_placeOrder:By.css('div.cn-payment-method:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1)'),
    checkout_button_wechat_placeOrder: By.css('div.cn-payment-method:nth-child(4) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1)'),
    checkout_button_unionpay_placeOrder:By.css('div.cn-payment-method:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1)'),
}

export const pageConfig: CheckoutConfig = new PageConfig({
    data: data,
    elements: checkout,
    featureData: featureData,
    elementData: elementParameter
});