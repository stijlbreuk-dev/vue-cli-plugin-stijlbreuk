# ![Stijlbreuk logo](/logo-32x32.png?raw=true 'Stijlbreuk logo') `vue-cli-plugin-stijlbreuk`

Vue CLI plugin that does extra scaffolding the way we like it at [Stijlbreuk](https://stijlbreuk.nl).

## Table of Contents

- [Prerequisite](#prerequisite)
- [Installation](#installation)
  - [Install package globally](#install-package-globally)
  - [Install package per project](#install-package-per-project)
- [Usage](#usage)
  - [New project](#new-project)
  - [Existing project](#existing-project)
- [Development](#development)
- [License](#license)
- [Created by](#created-by)

## Prerequisite

You need `@vue/cli` installed globally as a prerequisite. If you don't have it, please install it by running:

```shell
npm install --global @vue/cli
```

## Installation

### Install package globally

Install `vue-cli-plugin-stijlbreuk` globally:

```shell
npm install --global git://github.com/stijlbreuk/vue-cli-plugin-stijlbreuk
```

<!--
or when published:

```shell
npm install --global vue-cli-plugin-stijlbreuk
```
-->

### Install package per project

Install `vue-cli-plugin-stijlbreuk` per project:

```shell
npm install --save-dev git://github.com/stijlbreuk/vue-cli-plugin-stijlbreuk
```

<!--
or when published:

```shell
npm install --save-dev vue-cli-plugin-stijlbreuk
```
-->

## Usage

### New project

Create a new project with the `vue-cli-plugin-stijlbreuk` preset:

<!--
```shell
vue create <project-name> --preset stijlbreuk/vue-cli-plugin-stijlbreuk
```
-->

### Existing project

After installation inside of the project, invoke the Vue CLI plugin of Stijlbreuk:

```shell
vue invoke stijlbreuk
```

<!--
or when published:

```shell
vue add stijlbreuk
```
-->

## Development

To develop this plugin locally, simply clone the project and move to it:

```shell
git clone git://github.com/stijlbreuk/vue-cli-plugin-stijlbreuk
cd vue-cli-plugin-stijlbreuk
```

To install the local project as the package to use, run the following commands to install and invoke the plugin:

```shell
npm install --save-dev file:/full/path/to/plugin
vue invoke stijlbreuk
```

## License

[ISC](https://choosealicense.com/licenses/isc/)

## Created by

This package was created by the handsome people at [Stijlbreuk](https://stijlbreuk.nl).
