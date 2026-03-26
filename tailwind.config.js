/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6244c5",
        secondary: "#f5a14d",
        dark: {
          DEFAULT: "#020617", // Slate 950
          lighter: "#0f172a", // Slate 900
          surface: "#1e293b", // Slate 800
        },
        light: {
          DEFAULT: "#f8fafc", // Slate 50
          muted: "#94a3b8", // Slate 400
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(135deg, #6244c5 0%, #8b5cf6 100%)',
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'premium-hover': '0 20px 40px -15px rgba(98, 68, 197, 0.3)',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        righteous: ["var(--font-righteous)", "cursive"],
      },
    },
  },
  plugins: [],
};
