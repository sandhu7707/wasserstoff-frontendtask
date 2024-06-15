import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        growshrink: {
          '0%, 100%': {width: '100%'},
          '50%': {width: '80%'}
        },
        shrinkgrow: {
          '0%, 100%': {width: '80%'},
          '50%': {width: '100%'}
        },
        growshrinkimage: {
          '0%, 100%': {width: '100%'},
          '50%': {width: '50%'}
        },
        shrinkgrowimage: {
          '0%, 100%': {width: '50%'},
          '50%': {width: '100%'}
        },
        coverout: {
          '99%': {transform: 'translateY(-100%)'},
          '100%': {display: 'none'}
        }
      },
      animation: {
        growshrink: 'growshrink 6s infinite',
        shrinkgrow: 'shrinkgrow 6s infinite',
        growshrinkimage: 'growshrinkimage 6s infinite',
        shrinkgrowimage: 'shrinkgrowimage 6s infinite',
        coverout: 'coverout 2s',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        appBackground: ['7rem', '7rem']
      }
    },
  },
  plugins: [],
};
export default config;
