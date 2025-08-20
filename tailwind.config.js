/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f3',
          100: '#fce7e8',
          200: '#f9d3d5',
          300: '#f4b2b6',
          400: '#ed8a8f',
          500: '#ef767a', // Main brand color
          600: '#e55a60',
          700: '#d53e46',
          800: '#b0333a',
          900: '#912d34',
        },
        secondary: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#456990', // Secondary brand color
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#020617',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#49beaa', // Third brand color
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}