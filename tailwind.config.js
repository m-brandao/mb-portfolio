/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3490dc',
          light: '#3c9dfe',
          dark: '#1e5aa8',
        },
        secondary: {
          DEFAULT: '#ffed4a',
          light: '#fff06a',
          dark: '#e5cc2a',
        },
        certBg:{
          DEFAULT: '#020A0D'
        },
        dark: {
          primary: {
            light: '#637c9a',
            DEFAULT: '#4b6584',
            dark: '#344b60',
          },
          secondary: {
            light: '#ffd84d',
            DEFAULT: '#ffcc00',
            dark: '#e6b400',
          },
          background: '#1c1c1c',
          text: '#e2e2e2',
        },
        // ... add more custom colors as needed
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      // ... add more customizations as needed
    },
  },
  plugins: [],
}
