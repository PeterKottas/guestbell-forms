module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-static-block',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    'inline-react-svg',
  ],
};
