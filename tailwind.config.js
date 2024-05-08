/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const srcDir = __dirname;

export default {
  // darkMode: 'selector',
  darkMode: 'false',
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`

  ],
  theme: {
    fontFamily: {
      // 'body': ['Roboto'],
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}

