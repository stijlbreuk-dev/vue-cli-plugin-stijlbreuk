const fs = require('fs');
module.exports = (api, options, rootOptions) => {
    
    api.extendPackage({
        devDependencies: {
            'node-sass' : '4.x',
            'sass-loader': '7.x'
        }
    });
    api.render('./template');
}