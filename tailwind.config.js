/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#017785',
        'primary-disable': '#bfd5d8',
        secondary: '#f86534',
        'secondary-error': '#e14856',
        'secondary-light-error': '#f8dee1',
        'black-f6f8': '#f6f6f8',
        'black-50': '#505050',
        'black-90': '#909090',
        'black-d2d1': '#d2d1d1',
      },
      fontFamily: {
        sans: ['IRANSansFaNum', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight to avoid conflicts with Material-UI
  },
}
