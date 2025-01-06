/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: '#D2A150',
      },
    },
  },
  plugins: [],
};
