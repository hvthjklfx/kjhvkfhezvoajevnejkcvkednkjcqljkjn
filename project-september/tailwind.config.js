/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#0c0a08",
          900: "#16120e",
          800: "#1f1a14",
          700: "#2a221a",
          600: "#3a2f24",
        },
        bone: {
          50: "#f5f0e6",
          100: "#ebe2cf",
          200: "#d8c9a8",
          300: "#bfac82",
          400: "#9a8460",
        },
        gold: {
          DEFAULT: "#c9a96a",
          dark: "#a08548",
          light: "#e0c188",
        },
        rust: "#8a4a2a",
        sage: "#6b7a5a",
      },
    },
  },
  plugins: [],
};
