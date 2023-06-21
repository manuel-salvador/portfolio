/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-main':
          'linear-gradient(90deg, rgba(1, 22, 23, 1) 0%, rgba(2, 39, 41, 1) 50%, rgba(1, 22, 23, 1) 100%);',
      },
      keyframes: {
        'bounce-more': {
          '0%, 100%': {
            transform: 'translateY(-50%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        'wiggle-more': {
          '0%, 100%': {
            transform: 'rotate(-12deg)',
          },
          '50%': {
            transform: 'rotate(12deg)',
          },
        },
        jump: {
          '0%, 100%': {
            transform: 'scale(100%)',
          },
          '10%': {
            transform: 'scale(80%)',
          },
          '50%': {
            transform: 'scale(120%)',
          },
        },
        'jump-in': {
          '0%': {
            transform: 'scale(0%)',
          },
          '80%': {
            transform: 'scale(120%)',
          },
          '100%': {
            transform: 'scale(100%)',
          },
        },
        'jump-out': {
          '0%': {
            transform: 'scale(100%)',
          },
          '20%': {
            transform: 'scale(120%)',
          },
          '100%': {
            transform: 'scale(0%)',
          },
        },
        shake: {
          '0%': {
            transform: 'translateX(0rem)',
          },
          '25%': {
            transform: 'translateX(-1rem)',
          },
          '75%': {
            transform: 'translateX(1rem)',
          },
          '100%': {
            transform: 'translateX(0rem)',
          },
        },
        fade: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-4rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(4rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'bounce-more': 'bounce-more 1s infinite',
        wiggle: 'wiggle 1s ease-in-out',
        'wiggle-more': 'wiggle-more 1s ease-in-out',
        jump: 'jump .5s ease-in-out',
        'jump-in': 'jump-in .5s ease-in-out',
        'jump-out': 'jump-out .5s ease-in-out',
        shake: 'shake .5s ease-in-out',
        fade: 'fade 2s ease-in-out',
        'fade-down': 'fade-down 1s ease-in-out',
        'fade-up': 'fade-up 1s ease-in-out',
        'fade-left': 'fade-left 1s ease-in-out',
        'fade-right': 'fade-right 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
