module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
       
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier",
        
    ],
    "rules": {
        'react/react-in-jsx-scope': 'off',
        'no-var': 'error',
        'react/prop-types': 'off',
        'prefer-const': 'warn',
        'prettier/prettier': [
          'warn',
          {
            "endOfLine": 'auto',
          },
        ],
      },
}
