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
      white: 'rgb(255 255 255)',
      black: 'rgb(0 0 0)',
      aliceblue: '#f0f8ff',
    },
    fontFamily: {
      josefin: ['JosefinSans', 'serif'],
    },
    fontSize: {
      '17rem': ['1.7rem', '1'],
      '1.1rem': ['1.1rem', '1'],
      '1rem': ['1rem', '1'],
      '08rem': ['0.8rem', '1'],
    },
    screens: {
      xxs: [{ min: '100px', max: '374px' }],
      xs: [{ min: '375px', max: '600px' }],
      s: '601px',
      md: '901px',
      lg: '1200px',
    },
    extend: {
      backgroundImage: {
        mobil: "url('/Logo horizontal mobile-03.svg')",
        desktop: "url('/Logo_maybe.png')",
      },
      colors: {
        palette: {
          primary: '#000000',
        },
      },
    },
  },
  plugins: [],
};
