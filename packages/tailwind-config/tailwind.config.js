/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
     
        `app/**/*.{js,ts,jsx,tsx}`,
        `./components/**/*.{js,ts,jsx,tsx}`,
        // packages content
        '../../packages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)",
          tbase: "var(--color-text)",
          bgprimary: "var(--background-color)",
          surfacecolour: "var(--surface-colour)",
          button: {
            DEFAULT: "var(--default-color)",
            hover: "var(--hover-color)",
            pressed: "var(--pressed-color)",
            disabled: "var(--disabled-color)",
          },
          badge: {
            secondary: "var(--secondary-badge)",
            errorprimary: "var(--error-primary)",
            warningprimary: "var(--warning-primary)",
            successprimary: "var(--success-primary)",
          }
          
        },
        borderRadius: {
          smallrad:"var(--button-radius)",
          buttonHuge: 'var(--button-radius-huge)',
          buttonBig: 'var(--button-radius-big)',
          badgeBig: 'var(--badge-radius-big)',
        },      
        fontSize: {
          h1: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
          h2: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }],
          h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '500' }],
          h4: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }],
          h5: ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
          h6: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
          label: ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        },
      },
    },
    plugins: [],
  }