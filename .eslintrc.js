module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    module: true,
  },
  rules: {
    // 关闭类型推断
    '@typescript-eslint/no-inferrable-types': 'off',
    //
    '@typescript-eslint/no-explicit-any': 'off',
    //
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
};