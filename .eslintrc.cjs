module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    indent: 'error',
    'react/jsx-indent': 'error',
    'no-unexpected-multiline': 'error',
    'react/jsx-uses-react': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Allow arrow functions as React components
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': ['error', 'always'],
    // Show an error for unused variables
    'no-unused-vars': 'error',
    // Show a warning for unused components
    'react/jsx-no-undef': 'warn',
    'eslint-disable-next-line import/no-unresolved': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'eslint-disable-next-line react/prop-types': 0,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
  },
};
