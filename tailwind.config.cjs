/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern:
        /(bg|text|border|fill)-(normal|fighting|flying|poison|ground|rock|bug|ghost|steel|fire|water|grass|electric|psychic|ice|dragon|dark|fairy)-(100|400)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        normal: {
          100: '#A8A878',
          400: '#A8A878',
        },
        fighting: {
          100: '#D7433B',
          400: '#C03028',
        },
        flying: {
          100: '#8868E5',
          400: '#A890F0',
        },
        poison: {
          100: '#A040A0',
          400: '#A040A0',
        },
        ground: {
          100: '#DABC69',
          400: '#E0C068',
        },
        rock: {
          100: '#BFA845',
          400: '#B8A038',
        },
        bug: {
          100: '#AABC12',
          400: '#A8B820',
        },
        ghost: {
          100: '#705898',
          400: '#705898',
        },
        steel: {
          100: '#DADAE3',
          400: '#B8B8D0',
        },
        fire: {
          100: '#F08030',
          400: '#F08030',
        },
        water: {
          100: '#6890F0',
          400: '#6890F0',
        },
        grass: {
          100: '#78C850',
          400: '#78C850',
        },
        electric: {
          100: '#ffd336',
          400: '#F8D030',
        },
        psychic: {
          100: '#F05F8B',
          400: '#F85888',
        },
        ice: {
          100: '#7BE0E0',
          400: '#98D8D8',
        },
        dragon: {
          100: '#7A46F7',
          400: '#7038F8',
        },
        dark: {
          100: '#705448',
          400: '#705848',
        },
        fairy: {
          100: '#FFA2B7',
          400: '#EE99AC',
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s forwards',
        slideUp: 'slideUp 0.5s forwards',
        slideRight: 'slideRight 0.5s forwards',
        slideLeft: 'slideLeft 0.5s forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(0vh)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0vh)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(150%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(150%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
