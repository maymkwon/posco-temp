import styled from 'styled-components';

type FlexboxProps = {
	align?: 'center' | 'flex-start' | 'flex-end';
	justify?:
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'space-around'
		| 'space-between';
};

type GridBoxProps = {
	name: string;
	overflow?: boolean;
};

type GridContainerProps = {
	[x: string]: any;
};

export const FlexBox = styled.div<FlexboxProps>`
	display: flex;
	align-items: ${({ align }) => align};
	justify-content: ${({ justify }) => justify};
`;

export const GridContainer = styled.div<GridContainerProps>`
	display: grid;
`;

export const GridBox = styled.div<GridBoxProps>`
	grid-area: ${({ name }) => name};
	overflow: ${({ overflow }) => (overflow ? 'auto' : 'hidden')};
`;
