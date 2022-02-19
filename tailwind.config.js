module.exports = {
  darkMode: 'class',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./*.ftl", "./module/*.ftl", "./module/widget/*.ftl"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Lato',"Noto Sans SC", "-apple-system", 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }, 
      animation: {
        'search': 'searchShow .2s both',
      },
      zIndex: {
        '999': '999',
        '-1': '-1'
      },
      transformOrigin: {
        '50': '50% 50%',
        'full': '100%',
      }
    },
    rotate: {
      '-45': '-45deg',
      '-90': '-90deg',
      '90': '90deg',
    },
    minHeight: {
      '100': '100px'
    },
    maxHeight: {
      '200': '200px'
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
