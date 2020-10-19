module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['vuepress', '@vue/standard', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', { arrays: 'always-multiline', objects: 'always-multiline' }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  },
}
