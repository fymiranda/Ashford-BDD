import { By } from "selenium-webdriver";
import { PageConfig } from "@aaxis/cucumber-selenium/lib/config/PageConfig";


export type PLPData = {

}

export type PLPElementParameter = {
}


export type PLPElementDef = {
    plp_breadcrumb: By
    plp_topBanner: By
    plp_filter: By
    plp_searchResultList: By
    plp_searchResultNumber: By
    plp_searchResultSection: By

    plp_searchResult_addToCart : By
    plp_body : By
    plp_browseProductListSection: By
    plp_quickViewButton: By
    plp_quickViewPopup: By
    quickView_GoToPDPButton: By
    quickView_SkuId: By

}

export type PLPConfig = PageConfig<PLPElementDef, PLPData, PLPElementParameter>