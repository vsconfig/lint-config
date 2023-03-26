module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['@vsconfig/eslint-config'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};
