import React from 'react';
import * as S from './styled';

type BaseButtonProps = {
	text: string;
	onClickHandler: () => void;
};

const BaseButton = (props: BaseButtonProps) => {
	const { text, onClickHandler } = props;
	return <S.BaseButton onClick={onClickHandler}>{text}</S.BaseButton>;
};

export default BaseButton;
