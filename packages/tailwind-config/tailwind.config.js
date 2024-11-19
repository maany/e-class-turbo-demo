/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `app/**/*.{js,ts,jsx,tsx}`,
    "../../apps/web/src/components/**/*.{js,ts,jsx,tsx}",
    // packages content
    "../../packages/**/*.{js,ts,jsx,tsx}",
    "apps/web/stories/**/*.stories.tsx",
    "apps/docs/stories/**/*.stories.tsx"
  ],
  theme: {
    extend: {
      screens: {
        sm: "380px",
        md: "800px",
        lg: "1400px",
        xl: "1600px"
      },

      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tbase: "var(--color-text)",
        bgprimary: "var(--background-color)",
        surfacecolour: "var(--surface-colour)",
        successprimary: "var(--success-primary)",
        errorprimary: "var(--error-primary)",
        warningprimary: "var(--warning-primary)",
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
        },
      },
      borderRadius: {
        smallrad: "var(--button-radius)",
        buttonHuge: "var(--button-radius-huge)",
        buttonBig: "var(--button-radius-big)",
        badgeBig: "var(--badge-radius-big)",
      },
      fontSize: {
        "h1-sm": [
          "48px",
          { lineHeight: "100%", fontWeight: "700", letterSpacing: "-2%" },
        ],
        "h2-sm": [
          "32px",
          { lineHeight: "100%", fontWeight: "700", letterSpacing: "-2%" },
        ],
        "h3-sm": [
          "26px",
          { lineHeight: "110%", fontWeight: "700", letterSpacing: "0px" },
        ],
        "h4-sm": [
          "20px",
          { lineHeight: "120%", fontWeight: "700", letterSpacing: "0px" },
        ],
        "h5-sm": [
          "18px",
          { lineHeight: "120%", fontWeight: "700", letterSpacing: "0px" },
        ],
        "h6-sm": [
          "16px",
          { lineHeight: "120%", fontWeight: "700", letterSpacing: "0px" },
        ],
        "label-lg": ["14px", { lineHeight: "150%", letterSpacing: "0px" }],
        "para-sm": ["14px", { lineHeight: "150%", letterSpacing: "0px" }],

        "h1-lg": [
          "64px",
          { lineHeight: "100%", fontWeight: "700", letterSpacing: "-2%" },
        ],
        "h2-lg": [
          "48px",
          { lineHeight: "100%", fontWeight: "700", letterSpacing: "-2%" },
        ],
        "h3-lg": [
          "40px",
          { lineHeight: "110%", fontWeight: "700", letterSpacing: "0px" },
        ],
        "h4-lg": [
          "32px",
          { lineHeight: "120%", fontWeight: "700", letterSpacing: "0px" },
        ],
        "h5-lg": [
          "24px",
          { lineHeight: "120%", fontWeight: "700", letterSpacing: "0px" },
        ],
        "h6-lg": [
          "20px",
          { lineHeight: "120%", fontWeight: "700", letterSpacing: "0px" },
        ],

        "label-lg": [
          "18px",
          { lineHeight: "150%", fontWeight: "400", letterSpacing: "0px" },
        ],
        "label-md": [
          "16px",
          { lineHeight: "150%", fontWeight: "400", letterSpacing: "0px" },
        ],

        "para-md": [
          "16px",
          { lineHeight: "1.75rem", fontWeight: "400", letterSpacing: "0.01em" },
        ],
        "para-lg": [
          "18px",
          { lineHeight: "150%", fontWeight: "400", letterSpacing: "0px" },
        ],
      },
    },
  },
  plugins: [],
};
