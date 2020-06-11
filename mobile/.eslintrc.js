module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  settings: {
    'import/resolver': {
        node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', '.tsx', '.ts']
      }
    ],
    'global-require': 0,
    "import/extensions": "off",
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
  },
};
