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
        },
        background: "#2F333A",
      },
    },
  },
  plugins: [],
}
export default config
