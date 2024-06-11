/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        tertiary: 'hsl(var(--tertiary))',
        background: 'hsl(var(--background))',
        customGrey: 'hsl(var(--custom-grey))',
      },
      boxShadow: {
        custom: 'var(--box-shadow)',
      },
      minWidth: {
        'screen-min': '1024px',
      },
      minHeight: {
        'screen-min': '768px',
      },
    },
  },
  plugins: [],
};
