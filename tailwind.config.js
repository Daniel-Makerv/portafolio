module.exports = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
       
      },
    },
    variants: {
        borderWidth: ['responsive', 'hover','focus'],
        
    },
    plugins: [],
  }