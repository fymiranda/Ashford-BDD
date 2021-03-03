import { IScenarioData, PLACE_HOLDER, PageConfig } from "@aaxis/cucumber-selenium";
import { By } from "selenium-webdriver";
import { PDPConfig, PDPElementDef, PDPElementParameter, PDPData } from "../../../page-definitions/pdp/pdp";

const featureData: IScenarioData[] = [

]

const data: PDPData = {

}

const elementParameter: PDPElementParameter = {
}
export const PDPPage: PDPElementDef = {

    pdp_breadcrumb: By.css(`div[class*="breadcrumbs"])`),
    pdp_image: By.css(`img[class="zoomImg"]`),

    pdp_add_to_cart_button: By.css(`button[id="product-addtocart-button"]`),
    PDP_SkuId: By.css('span[class="prod-sku"]')
}


export const pageConfig: PDPConfig = new PageConfig({
    data: data,
    elements: PDPPage,
    featureData: featureData,
    elementData: elementParameter
});