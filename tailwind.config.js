/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1026px",
			xl: "1440px",
		},
		extend: {
			colors: {
				anfBlue: "hsl(230, 100%, 48%)",
				anfLightWhitishBlue: "hsl(230, 100%, 93%)",
				anfDeepBlue: "hsl(230, 100%, 24%)",
				anfVeryDeepBlue: "hsl(230, 100%, 13%)",
				translucentWhite: "rgba(255, 255, 255, 0.9)",
				veryLightGray: "hsl(10, 10%, 98%)",
				searchBg: "hsla(0, 0%, 0%, 0.77)",
			},
		},
	},
	plugins: [],
};
