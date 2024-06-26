/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'wiggle': "url('./wiggle.svg')"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

