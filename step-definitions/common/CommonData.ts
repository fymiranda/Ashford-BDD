import { PageConfigs } from "../../page-definitions/PageConfigs";
import { requireDataByConfig } from "@aaxis/cucumber-selenium";

export const pageObjects: PageConfigs = requireDataByConfig('PageConfigsData', 'pageObjects');