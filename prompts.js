/**
 *
 * Prompts for the CLI plugin
 * ---
 *
 * Create prompts based on [Inquirer](https://github.com/SBoudrias/Inquirer.js)
 *
 */

module.exports = (package) => {
  const prompts = [
    {
      name: 'vueVersion',
      type: 'list',
      message: 'What version of Vue will you be using?',
      choices: ['3.x', '2.x'],
    },
    {
      when: (answer) => answer.vueVersion === '2.x',
      name: 'useVueVersion2',
      type: 'confirm',
      message:
        'Vue2 has an old config. We recommend using Vue3. Do you wish to use the Vue2 config?',
      default: false,
    },
    {
      when: (answer) => answer.vueVersion === '3.x',
      group: 'template',
      name: 'useTemplate',
      type: 'confirm',
      message: 'Use a template from Stijlbreuk?',
      default: true,
    },
    {
      when: (answer) => answer.vueVersion === '3.x' && answer.useTemplate,
      group: 'template',
      name: 'template',
      type: 'list',
      loop: true,
      message: 'What template do you want to scaffold?',
      choices: ['default', { type: 'separator' }, 'with-storybook'],
    },
  ];

  return prompts;
};
