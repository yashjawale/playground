/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)',
				basecolor: 'rgb(var(--color-base) / <alpha-value>)',
			},
			fontFamily: {
				title: ["Allura", ...defaultTheme.fontFamily.sans],
				sans: ["Manrope", ...defaultTheme.fontFamily.sans]
			},
		},
	},
	plugins: [],
	darkMode: 'class',
}
