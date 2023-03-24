/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#fca311',
          'primary-focus': '#ffc76c',
          neutral: '#14213d',
          'neutral-focus': '#ffc76c',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#fca311',
          'primary-focus': '#ffc76c',
          neutral: '#14213d',
          'neutral-focus': '#ffc76c',
        },
      },
      'cupcake',
    ],
  },
}
