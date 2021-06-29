const fs = require('fs');

module.exports = (api, options, rootOptions) => {
  if (options.vueVersion === '2.x' && options.useVueVersion2) {
    api.extendPackage({
      devDependencies: {
        'node-sass': '4.x',
        'sass-loader': '7.x',
        'reset-css': '4.x',
        /**
         * Linting
         */
        '@release-it/keep-a-changelog': '^2.2.2',
        '@vue/cli-plugin-babel': '^3.4.0',
        '@vue/cli-plugin-eslint': '^3.4.0',
        '@vue/eslint-config-airbnb': '^4.0.0',
        'babel-eslint': '^10.0.1',
        'babel-preset-airbnb': '^3.2.1',
        eslint: '^5.8.0',
        'eslint-plugin-vue': '^5.0.0',
        'markdownlint-cli': '^0.14.1',
        'npm-run-all': '^4.1.5',
        'release-it': '^14.2.2',
        stylelint: '^9.10.1',
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
        'lint:all:markdownlint':
          'npm run lint:markdownlint -- --fix "docs/*.md" "*.md"',
        'lint:dry-run:eslint': 'npm run lint:eslint -- --ext .js,.vue .',
        'lint:dry-run:stylelint':
          'npm run lint:stylelint -- "src/**/*.{vue,scss}"',
        'lint:dry-run:markdownlint':
          'npm run lint:markdownlint -- "docs/*.md" "*.md"',
        lint: 'run-s lint:all:*',
        'lint:dry-run': 'run-s lint:dry-run:*',
        release: 'release-it',
      },
    });

    api.render('./vue2/template', {
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
      },
    });

    api.injectImports(
      api.entryFile,
      `import '@/components/global/_global-imports.js'`,
    );

    api.exitLog('🙌 Stijlbreuk scaffolding completed 🙌');
  }

  if (options.vueVersion === '3.x') {
    const sbOptions = {
      rootOptions: { ...rootOptions },
      options: { ...options },
      /**
       * When invoking a plug-in, every file in the `template` folder is treated as
       * a `EJS` (Embedded Javascript) file. This allows us to inject dynamic data
       * into a file. Properties added to the `sbOptions` object can be injected into
       * any file.
       *
       * example:
       *  create a `version` property by adding `version: '1.0.0'` below
       *  refer to the property in `README.md` like so:
       *    <%= sbOptions.version %>
       */
    };

    api.extendPackage({
      devDependencies: {
        'sort-package-json': '^1.50.0',
      },
      scripts: {
        'sort-package-json': 'sort-package-json',
      },
    });

    if (options.useTemplate) {
      api.render('./vue3/global', {
        sbOptions,
      });

      switch (options.template) {
        case 'with-storybook':
          // Add specific 'storybook' dependencies and scripts

          api.render(`./vue3/template-${options.template}`, {
            sbOptions,
          });
          break;
        case 'default':
        default:
          api.render(`./vue3/template-${options.template}`, {
            sbOptions,
          });
          break;
      }
    }

    api.onCreateComplete(() => {
      const pathsToDelete = ['public/img'];

      pathsToDelete.forEach((path) => {
        const resolvedPath = api.resolve(path);

        let exists = true;

        fs.access(resolvedPath, fs.F_OK, (error) => {
          if (error) {
            console.error(error);
            exists = false;
            return;
          }
        });

        if (exists) {
          fs.rm(resolvedPath, { recursive: true }, (error) => {
            if (error) {
              console.error(error);
              return;
            }
          });
        }
      });
    });

    api.exitLog(
      `🙌 Stijlbreuk finished scaffolding: ${rootOptions.projectName} 🙌`,
      'done',
    );
  }
};
