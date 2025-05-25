/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include JSX/TSX files
    "./src/styles/**/*.css",      // Include CSS files
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'rgba(0, 0, 255, 1)',  // Define colors explicitly
        'primary-green': 'rgba(0, 255, 0, 1)',
      },
      width: {
        '80px': '80px',
      },
      height: {
        '80px': '80px',
      },
    },
  },
  plugins: [],
}

