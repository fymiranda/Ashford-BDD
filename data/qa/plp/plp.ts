import { IScenarioData, PLACE_HOLDER, PageConfig } from "@aaxis/cucumber-selenium";
import { By } from "selenium-webdriver";
import { PLPConfig, PLPElementDef, PLPElementParameter, PLPData } from "../../../page-definitions/plp/plp";

const featureData: IScenarioData[] = [

]

const data: PLPData = {
}

const elementParameter: PLPElementParameter = {
}

export const PLPPage: PLPElementDef = {
    plp_breadcrumb: By.css(`div[class="breadcrumbs"]`),
    plp_topBanner: By.css(`#equiposTopBanner`),
   
    plp_filter: By.css(`div[class*="filterChoose"] > :nth-child(3) > :nth-child(1)`),
    plp_searchResultList: By.css(`div[class*="search results"]`),
    plp_searchResultNumber: By.css(`span[class="toolbar-number"]`),
    //plp_searchResultSection: By.css(`.product-image-photo`),
    //
    plp_searchResultSection: By.css(`li[class="item product product-item"]`),

    plp_searchResult_addToCart: By.css(`.product > .product-item-link > span:nth-child(1)`),
    plp_body: By.css("body"),

    plp_browseProductListSection: By.css('[class="products list items product-items"]'),
    plp_quickViewButton: By.css(''),
    plp_quickViewPopup: By.css(''),
    quickView_GoToPDPButton: By.css(''),
    quickView_SkuId: By.css('span[class="prod-sku"]')
}


export const pageConfig: PLPConfig = new PageConfig({
    data: data,
    elements: PLPPage,
    featureData: featureData,
    elementData: elementParameter
});