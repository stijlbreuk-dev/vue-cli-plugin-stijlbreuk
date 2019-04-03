const fs = require('fs');
module.exports = (api, options, rootOptions) => {

  api.extendPackage({
    devDependencies: {
      'node-sass': '4.x',
      'sass-loader': '7.x',
      'reset-css': '4.x'
    },
    scripts: {
      'build:staging': 'vue-cli-service build --mode staging',
      'lint:eslint': 'eslint',
      'lint:stylelint': 'stylelint',
      'lint:markdownlint': 'markdownlint',
      'lint:all:eslint': 'npm run lint:eslint -- --fix --ext .js,.vue .',
      'lint:all:markdownlint': 'npm run lint:markdownlint -- --fix "docs/*.md" "*.md"',
      'lint:dry-run:eslint': 'npm run lint:eslint -- --ext .js,.vue .',
      'lint:dry-run:stylelint': 'npm run lint:stylelint -- "src/**/*.{vue,scss}"',
      'lint:dry-run:markdownlint': 'npm run lint:markdownlint -- "docs/*.md" "*.md"',
      'lint': 'run-s lint:all:*',
      'lint:dry-run': 'run-s lint:dry-run:*'
    }
  });
  api.render('./template');
  api.injectImports(api.entryFile, `import '@/components/global/_global-imports.js'`)
  api.exitLog('🙌 Stijlbreuk scaffolding completed 🙌');
}
