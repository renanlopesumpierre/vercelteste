/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0D12',
        primary: '#3B82F6', // Deep Blue gradient base
        accent: '#60A5FA', // Lighter blue for hover
        text: '#FAF8F5',     // Ivory
        slate: '#2A2A35',    // Borders/gridlines
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        drama: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
