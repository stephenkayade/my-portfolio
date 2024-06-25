/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx, mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "xlarge": "10rem",
        large: "7rem",
        mid: "5rem",
        small: "3rem",
        xsmall: "1.5rem"
      },
      
    },
  },
  plugins: [],
}