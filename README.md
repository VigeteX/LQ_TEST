# WebdriverIO UI Tests for Telnyx Website

## Summary of Repository

This repository contains automated UI tests for various pages of the Telnyx website (https://telnyx.com/).  
Tests are written using **WebdriverIO** and **TypeScript**, following the **Page Object Model (POM)** structure.  
Each test corresponds to a manual test case defined in the specification document.  
Tests run **headless** inside Docker, supporting **Chromium** and **Firefox** browsers.  

---

## Requirements

Before running the tests, make sure you have installed the following:

- Node.js 18+
- npm v9+
- Docker Desktop (with Linux containers)
- WebdriverIO v8+
- Allure reporter (optional, for test reports)

---

## Steps to Install

1. Clone this repository:  
```bash
git clone https://github.com/VigeteX/LQ7.git
```

2. Open the project folder in VS Code.

3. Install dependencies:  
```bash
npm ci
```

---

## Steps to Launch Tests

### Locally in Docker

1. Build Docker image:  
```bash
docker build -t wdio-tests .
```

2. Run all tests in Docker (with Allure results):  
```bash
docker run --rm -v "${PWD}/allure-results:/app/allure-results" wdio-tests
```

### Run tests outside Docker

- Run all tests locally in default browser (headless by default):  
```bash
npm run test
```

- Run tests in Chrome:  
```bash
npm run test:chrome
```

- Run tests in Firefox:  
```bash
npm run test:firefox
```

---

## Project Structure

```
configs
    wdio.conf.ts
    wdio.edge.conf.ts
    wdio.firefox.conf.ts
allure-results
test
    pageobjects
        amazon.s3.page.ts
        base.page.ts
        common.page.ts
        coverage.page.ts
        iot.data.plans.page.ts
        resources.page.ts
        voice.ai.agents.page.ts
    specs
        calkulatePricing.ts
        calkulatePricingWithInvalidDataNeededValue.ts
        calkulatePricingWithInvalidSIMСardsТumberValue.ts
        compareCostsPerMonth.ts
        dropDownMessageVisibilityOnTheAmazonConnectPage.ts
        dropDownMessageVisibilityOnTheAmazonS3Page.ts
        dropDownMessageVisibilityOnTheBandwidthPage.ts
        dropDownMessageVisibilityOnTheHologramPage.ts
        dropDownMessageVisibilityOnTheKoreWirelessPage.ts
        dropDownMessageVisibilityOnTheTwilioPage.ts
        dropDownMessageVisibilityOnTheVapiPage.
        dropDownMessageVisibilityOnTheVonagePage.ts
        resetDataDownloadPerMonthValueByPressingNextAndBack.ts
        resetGlobalNumberСoverageFiltersOnNumberTypesTab.ts
        resetGlobalNumberСoverageFiltersOnNumberTypesTabBySwitchingTabs.ts
        resetGlobalNumberСoverageFiltersOnServicesTab.ts
        resetGlobalNumberСoverageFiltersOnServicesTabBySwitchingTabs.ts
        resetGlobalNumberСoverageNumberType.ts
        resetGlobalNumberСoverageNumberTypeBySwitchingTabs.ts
        resetStorageUseValueByPressingNextAndBack.ts
    wdio
.dockerignore
Dockerfile
.gitignore
package-lock.json
package.json
README.md
testdata.json
tsconfig.json
```

- **configs** – WebdriverIO configuration files for different browsers.  
- **pageobjects** – Page Object Models for the project.  
- **specs** – Test scripts.  
- **allure-results** – Allure test reports (generated after tests).  

---

## GitHub Actions CI

Tests can be run in GitHub Actions on push or pull request to `main`.  
- Workflow uses **Ubuntu runner**.  
- Builds Docker image and runs tests headless.  
- Uploads **Allure results** as artifacts.
