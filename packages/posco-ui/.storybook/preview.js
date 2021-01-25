import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core/styles';

// addDecorator(withThemesProvider(getAllThemes()));

addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator(
	withTests({
		results,
	})
);

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

addParameters({
	options: {
		brandTitle: 'CHANGEUP GROUND',
		brandUrl: '',
		showRoots: true,
	},
});
