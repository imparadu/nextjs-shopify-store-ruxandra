/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      '9/10': '90%',
    },
    colors: {
      albastru: '#6fbbcd',
    },
    fontFamily: {
      'josefin': ['JosefinSans', 'serif'],
    },
    extend: {
      colors: {
        palette: {
          primary: '#000000',
        },
      },
    },
  },
  plugins: [],
};
