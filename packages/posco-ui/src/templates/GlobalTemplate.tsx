import React from 'react';
import { GridBox } from '../boxes';
import * as S from './styled';

type GlobalTemplateProps = {
	menu: any;
	header: any;
	contents: any;
};

const GlobalTemplate = (props: GlobalTemplateProps) => {
	const { menu, header, contents } = props;
	return (
		<S.GContainer>
			<GridBox name="menu">{menu}</GridBox>
			<GridBox name="header">{header}</GridBox>
			<GridBox name="contents">{contents}</GridBox>
		</S.GContainer>
	);
};
export default GlobalTemplate;
