import {Config, ReportType} from "@aaxis/cucumber-selenium";

export const config: Config = {
    env: 'dev',
    screenshotOnSuccess: true,
    reportTypes: [ReportType.html]
}