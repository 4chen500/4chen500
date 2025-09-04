const { test, expect } = require('@playwright/test');

test('Web Vitals should load and display metrics', async ({ page }) => {
  // Load the page
  await page.goto('/');
  
  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle');
  
  // Wait for Web Vitals metrics to appear (up to 30 seconds)
  await page.waitForSelector('.App-metrics ul', { timeout: 30000 });
  
  // Get all the metric items
  const metricItems = page.locator('.App-metrics li');
  const count = await metricItems.count();
  
  // Should have at least some metrics
  expect(count).toBeGreaterThan(0);
  
  // Check that all metrics have non-zero values
  for (let i = 0; i < count; i++) {
    const metricText = await metricItems.nth(i).textContent();
    const value = parseFloat(metricText.split(': ')[1]);
    expect(value).toBeGreaterThan(0);
  }
  
  // Check that the repo link is present
  const repoLink = page.locator('.repo-link a');
  await expect(repoLink).toBeVisible();
  await expect(repoLink).toHaveAttribute('href', 'https://github.com/4chen500/4chen500');
  await expect(repoLink).toHaveText('Source');
  
  console.log(`✅ Found ${count} Web Vitals metrics with non-zero values`);
  console.log(`✅ Repo link is present and working`);
});
