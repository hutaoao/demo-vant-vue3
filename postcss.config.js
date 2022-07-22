// postcss.config.js
/*
const path = require('path');
module.exports = ({file}) => {
  const designWidth = file.includes(path.join('node_modules', 'vant')) ? 375 : 750;
  return {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: designWidth,
      },
    },
  }
};
*/

module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      selectorBlackList: ['van-', '.ignore'],
      exclude: [/node_modules/],
    },
  },
};
