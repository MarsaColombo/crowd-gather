import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to the home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Crowd Gather/);
  });

  test('should navigate to the events page', async ({ page }) => {
    await page.goto('/events');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('should navigate to the profile page', async ({ page }) => {
    await page.goto('/profile');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
});
