import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        workSans: ['var(--font-work-sans)'],
        unna: ['var(--font-unna)'],
      },
      colors: {
        "beauty-blue": "#0b233f",
        "beauty-grey": "#556479",
        "beauty-hover": "#394A62",
        "beauty-yellow": "#e2c47c",
        "beauty-sand": "#ecdbb0"
      },
    },
  },
  plugins: [],
} satisfies Config;
