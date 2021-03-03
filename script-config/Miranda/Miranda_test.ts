import { Options } from "selenium-webdriver/chrome"
import { Browser, Config } from "@aaxis/cucumber-selenium"

export const config: Config = {
    env: 'qa',
    featureFiles: ['features/*/*.feature'],
    steps: ['step-definitions/*/*.ts'],
    reportName: 'ashford-cucumber-report',
    screenshotOnSuccess: false,
    screenshotOnError: true,
    tags: ['@miranda'],
    // scenarioParallel: 4,
   //chromeOptions: new Options().addArguments('--ignore-certificate-errors', 'allow-running-insecure-content'),
    // chromeOptions: new Options().addArguments('--no-sandbox', '--disable-dev-shm-usage'),
    // chromeOptions: new Options().headless().addArguments('--no-sandbox'),
   chromeOptions: new Options().addArguments('--ignore-certificate-errors', 'allow-running-insecure-content',"window-size=1600,900"),
    // chromeOptions: new Options().headless().addArguments('--ignore-certificate-errors', 'allow-running-insecure-content', '--no-sandbox'),
    // chromeOptions: new Options().headless().addArguments('--ignore-certificate-errors', 'allow-running-insecure-content', '--no-sandbox', '--disable-dev-shm-usage'),
    browser: Browser.chrome
}