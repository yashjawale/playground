import { expect, test } from '@playwright/test'

const ROUTES = [
	'/playground/',
	'/playground/cryptarithmetic/',
	'/playground/fcfs/',
	'/playground/nqueens/',
]

for (const route of ROUTES) {
	test(`renders as baseline: ${route}`, async ({ page }) => {
		await page.addInitScript(() => {
			localStorage.setItem('theme', 'light')
		})
		await page.goto(route, { waitUntil: 'load' })
		await page.evaluate(() => document.fonts.ready)
		await page.waitForTimeout(250)
		await expect(page).toHaveScreenshot({
			fullPage: true,
			animations: 'disabled',
		})
	})
}
