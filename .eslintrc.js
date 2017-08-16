module.exports = {
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        // enable additional rules
        "indent": ["warn", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["warn", "double"],
        "semi": ["warn", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["warn", "always"],
        "no-cond-assign": ["warn", "always"],

        // disable rules from base configurations
        "no-console": "off",
    }
}