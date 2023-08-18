import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"full-black": "rgb(0, 0, 0)",
				"hover-black": "rgb(70, 70, 70)",
				"hero-bg": "#FBE9BA",
				"hero-btn": "#F4C550",
				"hero-btn-hover": "#FFDC86",
			},
		},
	},
	plugins: [],
};
export default config;
