export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "error-container": "#ffdad6",
        "tertiary": "#003d38",
        "on-error": "#ffffff",
        "on-secondary-container": "#576867",
        "surface-variant": "#e2e2ea",
        "secondary-container": "#d4e6e5",
        "surface-container": "#ededf5",
        "on-primary-fixed-variant": "#00429c",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#0e1e1e",
        "surface-container-high": "#e8e7f0",
        "on-error-container": "#93000a",
        "inverse-on-surface": "#f0f0f8",
        "on-background": "#1a1b21",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#a1bbff",
        "secondary": "#516161",
        "on-surface-variant": "#434652",
        "primary-fixed": "#d9e2ff",
        "secondary-fixed-dim": "#b8cac9",
        "outline": "#737783",
        "inverse-primary": "#b0c6ff",
        "surface-container-highest": "#e2e2ea",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#001945",
        "surface": "#faf8ff",
        "tertiary-container": "#00564f",
        "tertiary-fixed-dim": "#66d9cc",
        "background": "#faf8ff",
        "tertiary-fixed": "#84f5e8",
        "error": "#ba1a1a",
        "on-tertiary-fixed-variant": "#005049",
        "on-primary": "#ffffff",
        "primary-container": "#0d47a1",
        "surface-tint": "#2b5bb5",
        "on-tertiary-container": "#5bcfc2",
        "surface-bright": "#faf8ff",
        "primary-fixed-dim": "#b0c6ff",
        "on-surface": "#1a1b21",
        "primary": "#003178",
        "inverse-surface": "#2e3036",
        "surface-dim": "#d9d9e1",
        "surface-container-low": "#f3f3fb",
        "secondary-fixed": "#d4e6e5",
        "on-secondary-fixed-variant": "#3a4a49",
        "outline-variant": "#c3c6d4",
        "on-tertiary-fixed": "#00201d"
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
