import { IScenarioData, PLACE_HOLDER, PageConfig } from "@aaxis/cucumber-selenium";
import { By } from "selenium-webdriver";
import { UniversalConfig, UniversalElementDef, UniversalElementParameter, UniversalData } from "../../../page-definitions/universal/universal"

const featureData: IScenarioData[] = [

]

const data: UniversalData = {

}

const elementParameter: UniversalElementParameter = {
}
export const universal: UniversalElementDef = {
    // Header Elements
    header: By.css('div[class*="header content"]'),
    site_logo: By.css('a[id="logo_img"]'),
    login_bar: By.css('div[class*="anonymousUser"]'),
    cart_block: By.css('a[class*="action showcart"]'),
    login_link: By.xpath('/html/body/div[2]/header/div[1]/div/div/div[2]/div[2]'),

    search_label : By.css('form[id="search_mini_form"]'),
    search_input: By.css('input[placeholder="Search for something special..."]'),
    search_button: By.css('input[class*="atg_store_searchSubmit"]'),
    // Footer Elements
    footer: By.css('div[class*="new-footer"]'),
    footer_logo: By.css('div[class*="new-footer-logo col-sm-12 col-xs-12"'),
}


export const pageConfig: UniversalConfig = new PageConfig({
    data: data,
    elements: universal,
    featureData: featureData,
    elementData: elementParameter
});