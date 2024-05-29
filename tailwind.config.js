/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.vue',
    './src/components/*',
    "./src/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'main': '#111113',
        'subtle-main': '#18191B',
        'component-color': '#212225',
        'interactive': '#272A2D',
        'int-label': '#2E3135',
        'contrast': '#EDEEF0'
      },

      borderColor : {
        'main': '#363A3F',
        'main-bg': '#111113',
        'main-and-seperator': '#363A3F',
        'disable' : '#5A6169',
        'contrast': '#EDEEF0'
      },
      textColor : {
        'disable': '#5A6169',
        'slate10': '#696E77',
        'secondary': '#B0B4BA',
        'contrast': '#EDEEF0'
      },
      fontFamily : {
        'montserrat-200': 'montserrat-200',
        'montserrat-300': 'montserrat-300',
        'montserrat-400': 'montserrat-400',
        'montserrat-500': 'montserrat-500',
        'montserrat-600': 'montserrat-600',
        'montserrat-700': 'montserrat-700',
        'montserrat-800': 'montserrat-800',
        'montserrat-900': 'montserrat-900',
        'reddit-mono-200 ': 'reddit-mono-200 ',
        'reddit-mono-300 ': 'reddit-mono-300 ',
        'reddit-mono-400 ': 'reddit-mono-400 ',
        'reddit-mono-500 ': 'reddit-mono-500 ',
        'reddit-mono-600 ': 'reddit-mono-600 ',
        'reddit-mono-700 ': 'reddit-mono-700 ',
        'reddit-mono-800 ': 'reddit-mono-800 ',
        'reddit-mono-900 ': 'reddit-mono-900 ',
      },
      boxShadowColor: {
        'main': '#111113',
         'subtle-main': '#18191B',
        'component-color': '#212225',
        'interactive': '#272A2D',
        'int-label': '#2E3135',
        'contrast': '#EDEEF0'
      },
      width: {
        'li': 'calc(100% - 145px )'
      }
    },
  },
  plugins: [],
}