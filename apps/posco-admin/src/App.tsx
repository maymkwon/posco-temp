import React from 'react';
import { GlobalTemplate } from '@posco/ui/lib/Templates';
import styled from 'styled-components';

const ColorBox = styled.div<{ color: string }>`
	background-color: ${({ color }) => color};
`;

function App() {
	return (
		<GlobalTemplate
			header={<ColorBox color="red">header</ColorBox>}
			menu={<ColorBox color="blue">menu</ColorBox>}
			contents={<ColorBox color="pink">contents</ColorBox>}
		/>
	);
}

export default App;
