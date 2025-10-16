import { test, expect } from '@playwright/test';

test.describe('Style Transfer Techniques Article', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Style Transfer Techniques article page
    await page.goto('/tutorials/style-transfer-techniques');
  });

  test('should load the article page successfully', async ({ page }) => {
    // Check that the page title contains the expected text
    await expect(page).toHaveTitle(/Style transfer|Artistic transformation|Creative editing|Visual styles/i);
    
    // Check that the main article content is visible
    await expect(page.locator('main')).toBeVisible();
    
    // Check that the article has a title
    const title = await page.locator('h1').first().textContent();
    expect(title).toBeTruthy();
    expect(title?.length).toBeGreaterThan(0);
  });

  test('should display article sections', async ({ page }) => {
    // Check that the article has multiple sections
    const sections = await page.locator('section').count();
    expect(sections).toBeGreaterThan(2);
    
    // Check that the article has content
    const content = await page.locator('main').textContent();
    expect(content).toBeTruthy();
    expect(content?.length).toBeGreaterThan(100);
  });

  test('should have proper navigation', async ({ page }) => {
    // Check that the navigation to previous/next articles exists
    await expect(page.locator('[aria-label="Previous tutorial"]')).toBeVisible();
    await expect(page.locator('[aria-label="Next tutorial"]')).toBeVisible();
  });

  test('should have SEO meta tags', async ({ page }) => {
    // Check that the page has meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveCount(1);
    
    // Check that the page has meta keywords
    const metaKeywords = page.locator('meta[name="keywords"]');
    await expect(metaKeywords).toHaveCount(1);
    
    // Check that title meta tag exists
    const titleMeta = page.locator('meta[property="og:title"]');
    await expect(titleMeta).toHaveCount(1);
  });
});