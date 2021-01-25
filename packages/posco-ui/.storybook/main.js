const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.(js|mdx|tsx)'],
	addons: [
		'@storybook/addon-actions/register',
		'@storybook/addon-links',
		'@storybook/addon-a11y/register',
		'@storybook/addon-knobs/register',
		'@storybook/addon-docs',
		'@storybook/addon-jest/register',
	],

	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('babel-loader'),
					options: {
						presets: [['react-app', { flow: false, typescript: true }]],
					},
				},
				require.resolve('react-docgen-typescript-loader'),
			],
		});
		config.resolve.extensions.push('.ts', '.tsx');
		return config;
	},
};

// module.exports = {
// 	stories: ['../src/**/*.stories.[tj]sx'],
// 	webpackFinal: async (config) => {
// 		config.module.rules.push({
// 			test: /\.(ts|tsx)$/,
// 			use: [
// 				{
// 					loader: require.resolve('ts-loader'),
// 				},
// 			],
// 		});
// 		config.resolve.extensions.push('.ts', '.tsx');
// 		return config;
// 	},
// 	addons: [
// 		'@storybook/addon-docs',
// 		'@storybook/addon-actions/register',
// 		'@storybook/addon-viewport/register',
// 		'@storybook/addon-a11y/register',
// 		'@storybook/addon-knobs/register',
// 		'storybook-addon-styled-component-theme/dist/register',
// 		'@storybook/addon-jest/register',
// 	],
// };
