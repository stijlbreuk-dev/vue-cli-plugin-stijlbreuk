module.exports = (api, opts) => {
    api.registerCommand('build:staging', 'vue-cli-service build --mode staging');
}