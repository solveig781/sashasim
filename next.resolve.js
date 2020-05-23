const path = require('path');

const { merge } = require('lodash/fp');
const { compose } = require('recompose');

/**
 * Allows us to add a new folder resolution
 * Meaning we can import from folders relative to the main
 * Src folder directly, without using relative imports (../../)
 */
// eslint-disable-next-line no-unused-vars
function addAlias(folderName, folderLocation) {
  return merge({
    resolve: {
      alias: {
        // If we pass in './src/components'
        // Then the resolve name will be 'components'
        // which will link to the folder './src/components'
        // ['components']: './src/components'
        [folderName]: folderLocation,
      },
    },
  });
}

/**
 * Join the folderLocation with our current root directory
 */
// eslint-disable-next-line no-unused-vars
function addAliasFolder(folderName, folderLocation = folderName) {
  return addAlias(folderName, path.join(__dirname, folderLocation));
}

/**
 * Allows us to use a folder somewhere
 * in our project without specifying the relative path
 * E.g. addModuleFolder('./src')
 *      now we can use anything in 'src' without the prepended 'src'
 *      import configuration from 'configuration'
 *      (when configuration is at './src/configuration')
 */
// eslint-disable-next-line no-unused-vars
const addModuleFolder = moduleFolder => ({ resolve = {}, ...config } = {}) => ({
  ...config,
  resolve: {
    ...resolve,
    modules: []
      .concat(resolve.modules)
      .concat(moduleFolder)
      .filter(Boolean),
  },
});

// Resolve folders relative to our root source folder
// This is similar to webpackConfig.resolve.modules.push("folder")
module.exports = compose(
  addModuleFolder('node_modules'),

  addAliasFolder('utils'),
  addAliasFolder('public'),
  addAliasFolder('contexts'),
  addAliasFolder('containers'),
  addAliasFolder('components'),
);
