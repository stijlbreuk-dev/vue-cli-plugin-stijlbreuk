module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    devDependencies: {
      'node-sass': '4.x',
      'sass-loader': '7.x',
      'reset-css': '4.x',
      /**
       * Linting
       */
      '@vue/cli-plugin-babel': '^3.4.0',
      '@vue/cli-plugin-eslint': '^3.4.0',
      '@vue/eslint-config-airbnb': '^4.0.0',
      'babel-eslint': '^10.0.1',
      'eslint': '^5.8.0',
      'eslint-plugin-vue': '^5.0.0',
      'markdownlint-cli': '^0.14.1',
      'npm-run-all': '^4.1.5',
      'stylelint': '^9.10.1',
      'stylelint-config-recess-order': '^2.0.1',
      'stylelint-config-standard': '^18.2.0',
      'stylelint-scss': '^3.5.4',
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
  api.render('./template', {
    sbOptions: {
      /**
       * When invoking a plug-in, every file in the `./template` folder is treated as 
       * a `EJS` (Embedded Javascript) file. This allows us to inject dynamic data
       * into a file. Properties added to the `sbOptions` object can be injected into
       * any file.
       * 
       * example:
       *  create a `version` property by adding `version: '1.0.0'` below
       *  refer to the property in `README.md` like so:
       *    <%= sbOptions.version %>
       */
    }
  });
  api.injectImports(api.entryFile, `import '@/components/global/_global-imports.js'`)
  api.exitLog('🙌 Stijlbreuk scaffolding completed 🙌');
}