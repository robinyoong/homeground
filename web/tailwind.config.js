module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#181a1b',
        },
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme('colors.gray.300'),
              '[class~="lead"]': { color: theme('colors.gray.400') },
              a: { color: theme('colors.gray.100') },
              strong: { color: theme('colors.gray.100') },
              'ul > li::before': { backgroundColor: theme('colors.gray.700') },
              hr: { borderColor: theme('colors.gray.800') },
              blockquote: {
                color: theme('colors.gray.100'),
                borderLeftColor: theme('colors.gray.800'),
              },
              h1: { color: theme('colors.gray.200') },
              h2: { color: theme('colors.gray.200') },
              h3: { color: theme('colors.gray.200') },
              h4: { color: theme('colors.gray.200') },
              code: { color: theme('colors.gray.200') },
              'a code': { color: theme('colors.gray.200') },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.gray.100'),
                borderBottomColor: theme('colors.gray.700'),
              },
              'tbody tr': { borderBottomColor: theme('colors.gray.800') },
            },
          },
          lightType: {
            css: {
              h1: {
                color: theme('colors.gray.800'),
              },
              h2: {
                color: theme('colors.gray.800'),
              },
              h3: {
                color: theme('colors.gray.800'),
              },
              h4: {
                color: theme('colors.gray.800'),
              },
              a: {
                color: theme('colors.gray.800'),
              },
              strong: {
                color: theme('colors.gray.800'),
              },
            },
          },
          darkType: {
            css: {
              h1: {
                color: theme('colors.gray.200'),
              },
              h2: {
                color: theme('colors.gray.200'),
              },
              h3: {
                color: theme('colors.gray.200'),
              },
              h4: {
                color: theme('colors.gray.200'),
              },
              a: {
                color: theme('colors.gray.200'),
              },
              strong: {
                color: theme('colors.gray.200'),
              },
            },
          },
        };
      },
    },
  },
  variants: {
    extend: { typography: ['dark'] },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-font-inter'),
  ],
};
