/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        ds: '900px'
      },
      height: {
        main: 'calc(100vh - 8rem)'
      },
      spacing: {
        '0.2': '0.2rem',
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '4.5': '4.5rem',
        '5': '5rem',
        '5.5': '5.5rem',
        '6': '6rem',
        '6.5': '6.5rem',
        '7': '7rem',
        '7.5': '7.5rem',
        '8': '8rem',
        '8.5': '8.5rem',
        '9': '9rem',
        '9.5': '9.5rem',
        '10': '10rem',
        '85': '85%',
        '90': '90%'
      },
      padding: {
        menu : '5%'
      },
      fontSize: {
        xs: '1.4rem',
        sm: '1.6rem',
        md: '1.8rem',
        base: '2.4rem',
        lg: '3.2rem',
        xl: '4.2rem',
        '2xl': '4.5rem',
        '3xl': '5.2rem'
      },
      borderRadius: {
        sm: '0.6rem',
        md: '0.8rem',
        lg: '1rem'
      },
      gridTemplateColumns: {
        main: '1fr 0.5fr',
        option: 'repeat(auto-fit, minmax(30rem, 1fr))',
      },
      gridTemplateRows: {
        main: '70% 25%',
        hero: '1fr auto',
        optionlg: '14rem',
        optionds: '18rem',
        optionsm: '16rem 16rem 16rem',
      },
      gridAutoRows: {
        hero: '1fr'
      },
      aspectRatio: {
        option: '4/5'
      },
      colors: {
        red: 'hsl(5, 85%, 63%)',
        orange: 'hsl(35, 77%, 62%)',
        white: 'hsl(36, 100%, 99%)',
        blue: {
          DEFAULT: 'hsl(233, 8%, 79%)',
          100: 'hsl(236, 13%, 42%)',
          200: 'hsl(240, 100%, 5%)'
        },
      },
    },
  },
  plugins: [],
}

