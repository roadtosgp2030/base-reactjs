import { resolve } from 'path'

import cssplugin from './cssplugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [cssplugin(resolve(__dirname, './src/index.css'))]
}
