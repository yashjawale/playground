import { defineConfig, devices } from '@playwright/test'

const PORT = 4321
const BASE_URL = `http://127.0.0.1:${PORT}`

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
	use: {
		baseURL: BASE_URL,
		viewport: { width: 1280, height: 720 },
		colorScheme: 'light',
		contextOptions: {
			reducedMotion: 'reduce',
		},
		screenshot: 'off',
		trace: 'retain-on-failure',
	},
	webServer: {
		command: `npm run build && npm run preview -- --host 127.0.0.1 --port ${PORT}`,
		url: `${BASE_URL}/playground/`,
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
})
