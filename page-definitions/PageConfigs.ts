
import { SiteGlobalDataConfig } from "./GlobalConfig";
import { PDPConfig } from "./pdp/pdp";
import { LandingConfig } from './landing_page/landing_page';
import { HomepageConfig } from "./landing_page/homepage";
import { PLPConfig } from "./plp/plp";
import { CartConfig } from "./shopping_cart/shopping_cart";
import { UniversalConfig } from "./universal/universal";
import { CheckoutConfig} from "./checkout/checkout";
import { LoginConfig} from "./myaccount/login";
import { SearchConfig} from "./Search/search";

export type PageConfigs = {
    siteGlobalData: SiteGlobalDataConfig
    pdp: PDPConfig
    landing: LandingConfig
    homepage: HomepageConfig
    plp: PLPConfig
    cart: CartConfig
    universal: UniversalConfig
    checkout: CheckoutConfig
    login: LoginConfig
    search: SearchConfig
}