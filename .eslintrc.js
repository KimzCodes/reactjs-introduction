module.exports = {
	parser: "babel-eslint",
	env: {
		browser: true,
		es6: true,
	},
	extends: ["react-app", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
	},
	plugins: ["react", "prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				printWidth: 80,
				trailingComma: "es5",
				semi: true,
				jsxSingleQuote: false,
				singleQuote: false,
				useTabs: true,
				endOfLine: "auto",
				bracketSpacing: true,
			},
		],
	},
};
