import styled from 'styled-components';
import { GridContainer } from '../boxes';

export const GContainer = styled(GridContainer)`
	grid-template-rows: minmax(50px, 60px) 1fr;
	grid-template-columns: 250px 1fr;
	grid-template-areas:
		'menu header'
		'menu contents';
	grid-gap: 5px 0;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	min-height: 100%;
`;
