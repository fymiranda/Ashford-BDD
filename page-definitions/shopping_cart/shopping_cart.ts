import { By } from "selenium-webdriver";
import { PageConfig } from "@aaxis/cucumber-selenium/lib/config/PageConfig";


export type CartData = {
    cart_url: string
    cart_summary_title: string
}

export type CartElementParameter = {
}


export type CartElementDef = {
    cart_title: By
    cart_details_section: By
    cart_summary: By
    cart_button_checkout: By
    cart_icon_delete: By

    // empty cart
    cart_empty_sentence: By

    //mini cart elements
    mini_cart_icon: By
    mini_cart_qty: By
    mini_cart_div: By
    mini_cart_close:By
    mini_cart_viewcart:By
    mini_cart_checkout: By

    //item
    itemName_first: By
}

export type CartConfig = PageConfig<CartElementDef, CartData, CartElementParameter>