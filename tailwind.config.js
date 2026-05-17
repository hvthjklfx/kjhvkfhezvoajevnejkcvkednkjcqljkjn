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
        // Soft warm-paper base (light theme)
        ink: {
          950: "#faf7f3",
          900: "#f4eee6",
          800: "#ece3d7",
          700: "#dccfbe",
          600: "#c6b6a1",
        },
        // Deep muted text tones
        bone: {
          50: "#3c3531",
          100: "#4c443e",
          200: "#5f554b",
          300: "#776a5c",
          400: "#9d8f7e",
        },
        // Dusty rose — primary accent
        gold: {
          DEFAULT: "#c98b96",
          dark: "#ad6c7b",
          light: "#e4bcc3",
        },
        // Sage green — secondary
        sage: "#9aab8e",
        // Muted terracotta — alerts
        rust: "#bd7d63",
        // Soft lavender — tertiary
        lavender: "#a89bb5",
        // Powder blue — calm accents
        powder: "#9fb3bf",
      },
    },
  },
  plugins: [],
};
