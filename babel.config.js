module.exports = {
  env: {
    production: {
      plugins: [
        [
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
};
