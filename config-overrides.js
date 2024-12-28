const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  // Абсолютный путь для импортов в JS/JSX
  addWebpackAlias({
    '~': path.resolve(__dirname, 'src')
  }),
  // Абсолютный путь для импортов в SCSS
  (config) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    if (oneOfRule) {
      oneOfRule.oneOf.forEach((rule) => {
        if (rule.test && rule.test.toString().includes('scss')) {
          const sassLoader = rule.use.find(
            (loader) => loader.loader && loader.loader.includes('sass-loader')
          );
          if (sassLoader) {
            sassLoader.options = {
              ...sassLoader.options,
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src')]
              }
            };
          }
        }
      });
    }
    return config;
  }
);
