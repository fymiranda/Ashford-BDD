import { By } from "selenium-webdriver";
import { PageConfig } from "@aaxis/cucumber-selenium/lib/config/PageConfig";


export type PDPData = {

}

export type PDPElementParameter = {
}


export type PDPElementDef = {
    pdp_breadcrumb: By
    pdp_image: By

    pdp_add_to_cart_button: By
    PDP_SkuId: By

}

export type PDPConfig = PageConfig<PDPElementDef, PDPData, PDPElementParameter>