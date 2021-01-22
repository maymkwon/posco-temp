import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

// addDecorator(withThemesProvider(getAllThemes()));

addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator(
	withTests({
		results,
	})
);

addParameters({
	options: {
		brandTitle: 'CHANGEUP GROUND',
		brandUrl: '',
		showRoots: true,
	},
});
