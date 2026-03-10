/** @type {import('stylelint').Config} */

export default {
	extends: ['stylelint-config-standard-scss'],
	rules: {
		'block-no-empty': true,
		'no-empty-source': null,
		'color-hex-length': 'short',
		'max-nesting-depth': 2,
		'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],

		'property-no-deprecated': [true, { ignoreProperties: ['clip', '/^grid-/'] }],
		'selector-class-pattern':
			'^[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$',
		'custom-property-pattern': null,
		'color-function-notation': 'legacy',
		'font-family-name-quotes': 'always-unless-keyword',
		'selector-max-specificity': '0,3,0',
		'selector-no-vendor-prefix': true,
		'keyframe-selector-notation': 'percentage',
		'selector-no-qualifying-type': [true, { ignore: ['class', 'attribute'] }],
		'scss/dollar-variable-pattern': /[a-z][a-zA-Z]+/,
		'color-function-alias-notation': null,
		'custom-property-empty-line-before': null,
		'scss/dollar-variable-empty-line-before': null,
		'scss/at-rule-conditional-no-parentheses': null,
	},
};
