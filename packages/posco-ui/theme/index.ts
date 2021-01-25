import createMuiTheme, {
	ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

function createCustomTheme(options: ThemeOptions) {
	return createMuiTheme({
		...options,
	});
}

const theme = createCustomTheme({
	palette: {
		primary: { main: '#00a0e9', contrastText: '#fff' },
	},
});

export default theme;
