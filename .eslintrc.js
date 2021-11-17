module.exports = {
    extends: 'airbnb',
    plugins: ['react', 'jsx-a11y', 'import', 'jest', 'react-hooks'],
    rules: {
        camelcase: 'off',
        indent: ['error', 4],
        'no-param-reassign': ['error', { props: false }],
        'no-use-before-define': ['error', { functions: false }],
        'react/prefer-stateless-function': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': [2, 4],
        'react/no-unescaped-entities': 0,
        'react/prop-types': [0],
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'import/no-cycle': [0],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': [
            'error',
            {
                html: 'ignore',
                custom: 'ignore',
                exceptions: [''],
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                labelComponents: ['CustomInputLabel'],
                labelAttributes: ['label'],
                controlComponents: ['CustomInput'],
                depth: 3,
            },
        ],
    },
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src/utils'],
            },
        },
    },
};
