import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	// copied from https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js
	darkMode: "media", // or 'class'
	theme: {
		screens: {
			"mobile-s": "320px",
			"mobile-m": "375px",
			"mobile-l": "425px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "2560px",
		},
	},
	plugins: [],
} satisfies Config;
