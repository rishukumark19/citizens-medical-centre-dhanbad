export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "primary": "#0d57a0",
        "on-primary": "#ffffff",
        "primary-container": "#d6e3ff",
        "on-primary-container": "#001b3f",
        "primary-fixed": "#d6e3ff",
        "on-primary-fixed": "#001b3f",
        "primary-fixed-dim": "#a7c8ff",
        "on-primary-fixed-variant": "#00408d",
        "inverse-primary": "#a7c8ff",
        "surface-tint": "#0d57a0",
        
        "secondary": "#05aba4",
        "on-secondary": "#ffffff",
        "secondary-container": "#9ffcf3",
        "on-secondary-container": "#00201e",
        "secondary-fixed": "#9ffcf3",
        "on-secondary-fixed": "#00201e",
        "secondary-fixed-dim": "#59dcd2",
        "on-secondary-fixed-variant": "#00504b",

        "tertiary": "#05aba4",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#9ffcf3",
        "on-tertiary-container": "#00201e",
        "tertiary-fixed": "#9ffcf3",
        "on-tertiary-fixed": "#00201e",
        "tertiary-fixed-dim": "#59dcd2",
        "on-tertiary-fixed-variant": "#00504b",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        "background": "#fdfcff",
        "on-background": "#1a1c1e",
        "surface": "#fdfcff",
        "on-surface": "#1a1c1e",
        "surface-variant": "#dfe2eb",
        "on-surface-variant": "#43474e",
        "outline": "#73777f",
        "outline-variant": "#c3c6cf",
        "inverse-surface": "#2f3033",
        "inverse-on-surface": "#f1f0f4",
        
        "surface-dim": "#dddce0",
        "surface-bright": "#fdfcff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f7f6fa",
        "surface-container": "#f1f0f4",
        "surface-container-high": "#ebeaee",
        "surface-container-highest": "#e6e4e8"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "container-max": "1280px",
        "gutter": "24px",
        "stack-sm": "8px",
        "stack-lg": "24px",
        "section-gap": "80px",
        "margin-mobile": "16px",
        "stack-md": "16px"
      },
      "fontFamily": {
        "headline-md": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "label-bold": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "display-lg": ["Plus Jakarta Sans"],
        "sans": ["Plus Jakarta Sans", "sans-serif"]
      },
      "fontSize": {
        "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "label-bold": ["14px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "display-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
