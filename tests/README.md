# Web Vitals E2E Test

Simple end-to-end test for the 4chen500 React application that validates Web Vitals metrics are loading correctly.

## What it does

The test:
1. Loads the page
2. Waits for Web Vitals metrics to appear
3. Verifies all metrics are present and have non-zero values

## Running the test

### Prerequisites
```bash
npm install
```

### Install Playwright browsers
```bash
npx playwright install
```

### Run the test
```bash
npm run test:e2e
```

### Run with visible browser
```bash
npm run test:e2e:headed
```

### Or use the test runner script
```bash
./run-tests.sh
./run-tests.sh headed
```

## Test file

The test is located at `tests/e2e/simple.spec.js` and is intentionally simple and focused.
