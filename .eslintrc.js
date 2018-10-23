//always use js format because it allows comments
module.exports = {
	//
	parser: 'babel-eslint', //need this or else class arrow method causes error https://github.com/eslint/eslint/issues/4683
	env: {
		browser: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'jest' //https://github.com/babel/babel-eslint/issues/6, need this for react or else importing React causes unused error, install the plugin here https://www.npmjs.com/package/eslint-plugin-react
	],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': 0, //custome rule
		// [
		//     "error",
		//     "windows"
		// ]
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/prop-types': 0, //custome rule
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error'
	},
	settings: {
		react: {
			createClass: 'createReactClass', // Regex for Component Factory to use,
			// default to "createReactClass"
			pragma: 'React', // Pragma to use, default to "React"
			version: '15.0', // React version, default to the latest React stable release
			flowVersion: '0.53' // Flow version
		},
		propWrapperFunctions: ['forbidExtraProps'] // The names of any functions used to wrap the
		// propTypes object, e.g. `forbidExtraProps`.
		// If this isn't set, any propTypes wrapped in
		// a function will be skipped.
	}
};
