const path = require('path')
const fs = require('fs')
const { mergeConfig, loadConfigFromFile } = require('vite');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  async viteFinal(config) {

    const { config: userConfig } = await loadConfigFromFile(
      getPackageDir("../vite.config.ts")
    );
    const indexReactConfig = config.plugins.findIndex((element)=>  element.length)
    config.plugins.splice(indexReactConfig, 1)
    const newConfig = mergeConfig(config,{
      ...userConfig
    })
    return newConfig;
  },
}

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      )
    }
    currDir = dir
  }
}