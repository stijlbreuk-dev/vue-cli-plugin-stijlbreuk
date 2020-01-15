// babel.config.js
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: [
          'es.promise'
        ]
      },
    ],
    'airbnb'
  ]
};
