/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  screens: {
			'md': '1200px',
		  },
		},
	  },
	  plugins: [require("daisyui")],
	  daisyui: {
		themes: ["light", "dark"],
		darkTheme: "dark",
	  },
	  darkMode: 'class',
}
