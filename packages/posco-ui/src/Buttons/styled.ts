import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
export const BaseButton = styled.button<{
	backgroundColor?: 'red' | 'blue' | 'pink';
}>`
	background-color: pink;
	color: #fff;
`;

export const RoundButton = withStyles((theme) => ({
	root: {
		borderRadius: '20px',
		padding: '9px 60px',
	},
}));
