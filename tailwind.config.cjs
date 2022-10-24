/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(normal|fighting|flying|poison|ground|rock|bug|ghost|steel|fire|water|grass|electric|psychic|ice|dragon|dark|fairy)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        normal: '#A8A878',
        fighting: '#C03028',
        flying: '#A890F0',
        poison: '#A040A0',
        ground: '#E0C068',
        rock: '#B8A038',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F85888',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
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
