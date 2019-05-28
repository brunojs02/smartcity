module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
    'es6': true
  },
  'rules': {
    'react/jsx-filename-extension': 'off',
    'import/no-named-default': 'off',
    'import/prefer-default-export': 'off'
  },
  'globals': {
    "fetch": false
  }
}
