module.exports = {
  components: {
    categories: [
      {
        name: 'INPUTS',
        include: [
          'src/components/Button/Button.tsx',
          'src/components/Card/Card.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'MUI-UXPin-Merge',
};
