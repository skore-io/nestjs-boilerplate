/* eslint-disable @typescript-eslint/no-require-imports */
const { fixupConfigRules } = require('@eslint/compat')
const jsonFormat = require('eslint-plugin-json-format')
const globals = require('globals')
const js = require('@eslint/js')
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = [
  {
    ignores: [
      'coverage/**',
      '**/prisma/**',
      '**/dist/**',
      'node_modules/**',
      'package-lock.json',
      'tsconfig.json',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'prettier',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ),
  ),
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/ban-ts-comment': 0,
      'no-return-await': 'error',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['classProperty'],
          format: ['camelCase', 'UPPER_CASE', 'snake_case'],
        },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2023,
      sourceType: 'module',
    },
    plugins: {
      'json-format': jsonFormat,
    },
    rules: {
      'no-console': 'warn',
      'no-return-await': 'error',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
  {
    files: ['**/test/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
]
