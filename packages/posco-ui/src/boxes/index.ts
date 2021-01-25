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

export const FlexBox = styled.div<FlexboxProps>`
	display: flex;
	align-items: ${({ align }) => align};
	justify-content: ${({ justify }) => justify};
`;
