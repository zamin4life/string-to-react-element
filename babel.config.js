module.exports = {
  env: {
    production: {
      plugins: [
        [
          'transform-react-remove-prop-types',
          {
            mode: 'wrap',
            ignoreFilenames: ['node_modules'],
          },
        ],
      ],
    },
  },
  presets: [
    [
      '@babel/preset-env',
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ],
};
