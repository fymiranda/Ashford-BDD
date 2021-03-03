import { By } from "selenium-webdriver";
import { PageConfig } from "@aaxis/cucumber-selenium/lib/config/PageConfig";


export type HomepageData = {

}

export type HomepageElementParameter = {
}


export type HomepageElementDef = {
    topBanner: By
    productlist: By
    firstproduct: By
    first_product_name: By
}

export type HomepageConfig = PageConfig<HomepageElementDef, HomepageData, HomepageElementParameter>