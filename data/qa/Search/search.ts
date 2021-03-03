import { IScenarioData, PLACE_HOLDER, PageConfig } from "@aaxis/cucumber-selenium";
import { By } from "selenium-webdriver";
import { SearchConfig, SearchElementDef, SearchElementParameter, SearchData } from "../../../page-definitions/Search/search";

const featureData: IScenarioData[] = [

]

const data: SearchData = {
}

const elementParameter: SearchElementParameter = {
}

export const Search: SearchElementDef = {
   
}


export const pageConfig: SearchConfig = new PageConfig({
    data: data,
    elements: Search,
    featureData: featureData,
    elementData: elementParameter
});