/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include JSX/TSX files
    "./src/styles/**/*.css",      // Include CSS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
