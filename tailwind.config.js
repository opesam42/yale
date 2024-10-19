/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        shade_white: 'var(--shade-white)',
        shade_gray: 'var(--shade-gray)',
        shade_primary: 'var(--shade-primary)'
      },

      fontFamily: {
        poppins: 'var(--text-font)',
        opensans: 'var(--header-font)',
      },

      fontSize:{
        xl: 'var(--font-size-xl)',
        lg: 'var(--font-size-lg)',
        cta_sm: 'var(--font-size-cta-sm)',
        md: 'var(--font-size-md)',
        sm: 'var(--font-size-sm)',
        xsm: '(font-size-xsm)',

        h3: 'var(--font-size-h3)',
        h2: 'var(--font-size-h2)',
        h1_m: 'var(--font-size-h1-mobile)',
        h1: 'var(--font-size-h1)',
      }
    },
  },
  plugins: [],
}

