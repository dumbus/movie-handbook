module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'import'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        alphabetize: {
          order: 'asc'
        },
        pathGroups: [
          {
            pattern: './**/*.scss',
            group: 'sibling',
            position: 'after'
          }
        ]
      }
    ]
  },
  ignorePatterns: ['.eslintrc.js', 'config-overrides.js'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.jsx']
      }
    }
  }
};
