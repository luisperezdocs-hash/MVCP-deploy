// ESLint configuration
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        // Place your custom rules here
        'no-unused-vars': 'warn',
        'no-console': 'off',
    },
};
