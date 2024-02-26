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
    fontSize : {
      '17rem': ['1.7rem', '1']
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
