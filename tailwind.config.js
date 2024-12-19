/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: 'rgba(var(--color-text), 1)',
        primary: 'rgba(var(--color-primary), 1)',
        secondary: 'rgba(var(--color-secondary), 1)',
        accent: 'rgba(var(--color-accent), 1)',
        background: 'rgba(var(--color-bg), 1)',
        backdrop50: 'rgba(var(--color-text), 0.5)',
        backdrop75: 'rgba(var(--color-text), 0.75)',
        backdrop90: 'rgba(var(--color-text), 0.9)',
      },
      keyframes: {
        blockCaret: {
          '0%, 20%,  100%': {
            backgroundColor: 'transparent',
          },
          '30%, 70%': {
            backgroundColor: 'rgba(var(--color-text), 1)',
          },
        },
      },
      animation: {
        blockCaret: 'blockCaret 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
