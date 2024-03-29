import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scroll: {
          '0%, 100%': { transform: ' translateY(-7%)', animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)", opacity: "0.4" },
          '50%': {
            transform: 'translateY(0)', animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)", opacity: "1",
          },
        }
      },
      animation: {
        'scroll': 'scroll 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
