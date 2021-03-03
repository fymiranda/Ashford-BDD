import { By } from "selenium-webdriver";
import { PageConfig } from "@aaxis/cucumber-selenium/lib/config/PageConfig";


export type UniversalData = {

}

export type UniversalElementParameter = {
}


export type UniversalElementDef = {
    // Header Elements
    header: By
    site_logo: By
    login_bar: By
    cart_block: By
    login_link: By

    search_label:By
    search_input: By
    search_button: By

    // Footer Elements
    footer: By
    footer_logo: By
}

export type UniversalConfig = PageConfig<UniversalElementDef, UniversalData, UniversalElementParameter>