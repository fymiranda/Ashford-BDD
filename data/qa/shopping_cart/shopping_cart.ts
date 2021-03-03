import { IScenarioData, PLACE_HOLDER, PageConfig } from "@aaxis/cucumber-selenium";
import { By } from "selenium-webdriver";
import { CartData, CartElementParameter, CartElementDef, CartConfig } from "../../../page-definitions/shopping_cart/shopping_cart";

const featureData: IScenarioData[] = [

]

const data: CartData = {
    cart_url: '/checkout/cart/',
    cart_summary_title: '',
}

const elementParameter: CartElementParameter = {

}

export const CartPages: CartElementDef = {
    cart_title: By.css(`h1[class="page-title"]`),
    cart_details_section: By.css(`div.mainDiv`),
    cart_summary: By.css(`div.cartDetailDiv div.infoDiv:not([class*="additional"])`),
    cart_button_checkout: By.css(`button[class="action primary checkout"][data-role="proceed-to-checkout"]`),
    cart_icon_delete: By.css(`div.operate div.delete`),

    // empty cart
    cart_empty_sentence: By.css(`div[class="cart-empty"]`),

    //mini cart elements
    mini_cart_icon: By.css('a.showcart'),
    mini_cart_qty: By.css(`span[class="counter-number"]`),
    mini_cart_div: By.css('div[class="quickcart-content-wrapper"]'),
    mini_cart_close: By.css('button[id="btn-minicart-close"]'),
    mini_cart_viewcart: By.css('a[class="action viewcart"]'),
    mini_cart_checkout: By.css('button[id="top-cart-btn-checkout"]'),

    //cart items
    itemName_first: By.xpath('//*[@id="shopping-cart-table"]/tbody[1]/tr/td[1]/div')
}

export const pageConfig: CartConfig = new PageConfig({
    data: data,
    elements: CartPages,
    featureData: featureData,
    elementData: elementParameter
});