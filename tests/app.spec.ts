import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Crowd Gather/);
});

test('navbar contains correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const navbarTitle = await page.getByRole('link', { name: 'Crowd Gather' });
  await expect(navbarTitle).toBeVisible();
});

test('search bar is visible on homepage', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const searchInput = await page.getByPlaceholder('Rechercher un événement politique');
  await expect(searchInput).toBeVisible();
});

// Mock les images pour éviter les erreurs
test.beforeEach(async ({ page }) => {
  // Intercepter les requêtes d'images et retourner une image vide
  await page.route('**/*.{png,jpg,jpeg}', async (route) => {
    const buffer = Buffer.from([
      0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xff, 0xff,
      0xff, 0x00, 0x00, 0x00, 0x2c, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02,
      0x02, 0x44, 0x01, 0x00, 0x3b,
    ]);
    await route.fulfill({
      status: 200,
      contentType: 'image/gif',
      body: buffer,
    });
  });
});
