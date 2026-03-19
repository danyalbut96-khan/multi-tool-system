/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3525cd",
        "primary-container": "#4f46e5",
        "on-surface": "#191c1e",
        "on-surface-variant": "#464555",
        "surface": "#f7f9fb",
        "surface-container-low": "#f2f4f6",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#c7c4d8",
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
