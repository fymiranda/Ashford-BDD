import { Config, ReportType } from "@aaxis/cucumber-selenium";


export const config: Config = {
    env: 'DEV1',
    featureFiles: ['features/poc/bing.feature'],
    steps: ['step-definitions/poc/bing.ts'],
    reportName: 'cucumber-report-bing',
    screenshotOnSuccess: true,
    reportTypes: [ReportType.html]
}