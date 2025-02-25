/*import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/.{js,ts,jsx,tsx,mdx}',
    './pages/.{js,ts,jsx,tsx,mdx}',
    './components/.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg_primary: '#464E52',
        bg_secondary: '#A9B6BE',
        text_gray_100: '#CDCDCD',
        text_gray_200: '#7D7D7D',
        text_gray_300: '#727272',
        text_gray_400: '#6F7879',
        text_gray_500: '#383838',
      },
      fontFamily: {
        regular: ['Cutive-Mono', 'sanf-serif'],
        'Cutive-Mono': ['Cutive-Mono', 'sanf-serif'],
        'Title-Font': ['Title-Font', 'sanf-serif'],
        'Pixel-Regular': ['Pixel-Regular', 'sanf-serif'],
        'Pixel-bold': ['Pixel-bold', 'sanf-serif'],
        'Check-font': ['Check-font', 'sanf-serif'],
        'Mine-Regular': ['Mine-Regular', 'sanf-serif'],
        'Mine-Bold': ['Mine-Bold', 'sanf-sarif'],
      },
    },
  },
  plugins: [],
} satisfies Config;*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg_primary: '#464E52',
        bg_secondary: '#A9B6BE',
        text_gray_100: '#CDCDCD',
        text_gray_200: '#7D7D7D',
        text_gray_300: '#727272',
        text_gray_400: '#6F7879',
        text_gray_500: '#383838',
      },
      fontFamily: {
        regular: ['Cutive-Mono', 'sanf-serif'],
        'Cutive-Mono': ['Cutive-Mono', 'sanf-serif'],
        'Title-Font': ['Title-Font', 'sanf-serif'],
        'Pixel-Regular': ['Pixel-Regular', 'sanf-serif'],
        'Pixel-bold': ['Pixel-bold', 'sanf-serif'],
        'Check-font': ['Check-font', 'sanf-serif'],
        'Mine-Regular': ['Mine-Regular', 'sanf-serif'],
        'Mine-Bold': ['Mine-Bold', 'sanf-sarif'],
      },
    },
  },
  plugins: [],
};
