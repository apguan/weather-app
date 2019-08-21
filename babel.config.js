module.exports = {
  presets: [
    [
      '@babel/preset-env',
      '@babel/plugin-proposal-class-properties'
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/preset-react',
  ]
};