import { PageConfigs } from "../../page-definitions/PageConfigs";
import { siteGlobalDataConfig } from "./GlobalData";
import { pageConfig as pdpConfig } from "./pdp/pdp";
import { pageConfig as landingConfig } from "./landing_page/landing_page";
import { pageConfig as homepageConfig } from "./landing_page/homepage";
import { pageConfig as plpConfig } from "./plp/plp";
import { pageConfig as cartConfig } from "./shopping_cart/shopping_cart";
import { pageConfig as universalConfig } from "./universal/universal";
import { pageConfig as checkoutConfig } from "./checkout/checkout";
import { pageConfig as loginConfig } from "./myaccount/login";
import { pageConfig as SearchConfig } from "./Search/search";

export const pageObjects: PageConfigs = {
    siteGlobalData: siteGlobalDataConfig,
    pdp: pdpConfig,
    landing: landingConfig,
    homepage: homepageConfig,
    plp: plpConfig,
    cart: cartConfig,
    universal: universalConfig,
    checkout: checkoutConfig,
    login: loginConfig,
    search:SearchConfig
}