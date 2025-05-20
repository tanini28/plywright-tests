import { test, expect } from '@playwright/test';

test('Перевірка відображення елементів навігації хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect.soft(page.await expect(page.getByRole('banner')).toContainText('Get started');getByRole('link', { name: 'Community' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect
    .soft(page.getByRole('button', { name: 'Switch between dark and light' }))
    .toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
});

test('Перевірка назв елементів навігації хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect
    .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
    .toContainText('Playwright');
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect.soft(page.getByRole('link', { name: 'API' })).toContainText('API');
  await expect.soft(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
  await expect.soft(page.getByRole('link', { name: 'Community' })).toContainText('Community');
});

test('Перевірка атрибутів href елементів навігації хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect
    .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
    .toHaveAttribute('href', '/');
  await expect
    .soft(page.getByRole('link', { name: 'Docs' }))
    .toHaveAttribute('href', '/docs/intro');
  await expect
    .soft(page.getByRole('link', { name: 'API' }))
    .toHaveAttribute('href', '/docs/api/class-playwright');
  await expect
    .soft(page.getByRole('link', { name: 'Community' }))
    .toHaveAttribute('href', '/community/welcome');
  await expect
    .soft(page.getByRole('link', { name: 'GitHub repository' }))
    .toHaveAttribute('href', 'https://github.com/microsoft/playwright');
  await expect
    .soft(page.getByRole('link', { name: 'Discord server' }))
    .toHaveAttribute('href', 'https://aka.ms/playwright/discord');
});

test('Перевірка переключення лайт мода', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Switch between dark and light mode').click();
  await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('Перевірка заголовку сторінки', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect
    .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
    .toBeVisible();
  await expect
    .soft
    (page.getByRole('heading', { name: 'Playwright enables reliable' }))
    .toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
});

test('Перевірка кнопки get started', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
  await expect
    .soft(page.getByRole('link', { name: 'Get started' }))
    .toHaveAttribute('href', '/docs/intro');
});
