import React from 'react';
import * as S from './styled';

// 테스트용 샘플 파일입니다.

type BaseButtonProps = {
	children: React.ReactNode;
	onClickHandler: () => void;
};
/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */
const BaseButton = ({ children, onClickHandler }: BaseButtonProps) => {
	return <S.BaseButton onClick={onClickHandler}>{children}</S.BaseButton>;
};

export default BaseButton;
