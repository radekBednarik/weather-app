import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	// copied from https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js
	darkMode: "media", // or 'class'
	theme: {},
	plugins: [],
} satisfies Config;
