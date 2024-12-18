/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      text: 'rgba(var(--color-text), 1)',
      primary: 'rgba(var(--color-primary), 1)',
      secondary: 'rgba(var(--color-secondary), 1)',
      accent: 'rgba(var(--color-accent), 1)',
      bg: 'rgba(var(--color-bg), 1)',
      backdrop50: 'rgba(var(--color-text), 0.5)',
      backdrop75: 'rgba(var(--color-text), 0.75)',
      backdrop90: 'rgba(var(--color-text), 0.9)',
    },
  },
  plugins: [],
}
