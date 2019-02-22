const fs = require('fs');
module.exports = (api, options, rootOptions) => {
    
    api.extendPackage({
        devDependencies: {
            'node-sass' : '4.x',
            'sass-loader': '7.x',
            'reset-css': '4.x'
        },
        scripts: {
            'build:staging': 'vue-cli-service build --mode staging'
        }
    });
    api.render('./template');
    api.injectImports(api.entryFile, `import '@/components/global/_global-imports.js'`)
    api.exitLog('🙌 Stijlbreuk scaffolding completed 🙌');
}