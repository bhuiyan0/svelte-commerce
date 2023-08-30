/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
				'xs':'480px'
			},
      boxShadow: {
        'primary': '0px 0px 5px rgba(200, 201, 209, 0.65)',
      },

      borderColor: {
        'primary': 'rgba(113, 106, 133, 0.25)'
      },
      divideColor: {
        'primary': 'rgba(113, 106, 133, 0.25)'
      },
      colors:{
        'primary': {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
      }
    }
  },
  plugins: [],
}