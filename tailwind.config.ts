import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E73C17",
        text: {
          primary: "#000000",
          secondary: "#191919",
          tertiary: "#6F6F6F",
          extra: "#D7D7D7",
        },
        background: {
          primary: "#FFFFFF",
          secondary: "#2F333A",
          tertiary: "#F4F5F8",
        },
        dividor: "#D9D9D9",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [],
}
export default config
