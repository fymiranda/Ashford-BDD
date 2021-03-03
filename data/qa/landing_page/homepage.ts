import { IScenarioData, PLACE_HOLDER, PageConfig } from "@aaxis/cucumber-selenium";
import { By } from "selenium-webdriver";
import { HomepageConfig, HomepageElementDef, HomepageElementParameter, HomepageData } from "../../../page-definitions/landing_page/homepage";

const featureData: IScenarioData[] = [

]

const data: HomepageData = {

}

const elementParameter: HomepageElementParameter = {
}
export const homepage: HomepageElementDef = {
    topBanner: By.css(`div[class*='owl-item']`),
    productlist: By.css(`div[class*='products-grid grid']`),
    firstproduct: By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div/div/div/ol/li[1]/div/a/span'),
    first_product_name: By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div/div/div/ol/li[1]/div/div/strong/a')
}


export const pageConfig: HomepageConfig = new PageConfig({
    data: data,
    elements: homepage,
    featureData: featureData,
    elementData: elementParameter
});