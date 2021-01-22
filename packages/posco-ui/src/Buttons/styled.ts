import styled from 'styled-components';

export const BaseButton = styled.button<{
	backgroundColor?: 'red' | 'blue' | 'pink';
}>`
	background-color: pink;
	color: '#fff';
`;
