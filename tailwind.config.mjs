/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {},
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                gold: "#D2A150",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
});
