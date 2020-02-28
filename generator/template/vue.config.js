process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/_variables.scss";'
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
};
