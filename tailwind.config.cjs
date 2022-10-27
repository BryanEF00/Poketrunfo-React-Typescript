/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(normal|fighting|flying|poison|ground|rock|bug|ghost|steel|fire|water|grass|electric|psychic|ice|dragon|dark|fairy)-(100|400)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        normal: {
          100: '#d5d5b3',
          400: '#A8A878',
        },
        fighting: {
          100: '#f0837d',
          400: '#C03028',
        },
        flying: {
          100: '#d1c3fb',
          400: '#A890F0',
        },
        poison: {
          100: '#e086e0',
          400: '#A040A0',
        },
        ground: {
          100: '#e7d4a1',
          400: '#E0C068',
        },
        rock: {
          100: '#c5b46c',
          400: '#B8A038',
        },
        bug: {
          100: '#d5e269',
          400: '#A8B820',
        },
        ghost: {
          100: '#a18ac7',
          400: '#705898',
        },
        steel: {
          100: '#7bb7b8',
          400: '#B8B8D0',
        },
        fire: {
          100: '#e29b68',
          400: '#F08030',
        },
        water: {
          100: '#99afe3',
          400: '#6890F0',
        },
        grass: {
          100: '#a6da8b',
          400: '#78C850',
        },
        electric: {
          100: '#FADF73',
          400: '#F8D030',
        },
        psychic: {
          100: '#f298b3',
          400: '#F85888',
        },
        ice: {
          100: '#c5f7f7',
          400: '#98D8D8',
        },
        dragon: {
          100: '#aa8bf5',
          400: '#7038F8',
        },
        dark: {
          100: '#a69487',
          400: '#705848',
        },
        fairy: {
          100: '#dbbbc2',
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
