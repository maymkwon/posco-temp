import React from 'react';
import * as S from './styled'; // 테스트용 샘플 파일입니다.

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */
var BaseButton = function BaseButton(_ref) {
  var children = _ref.children,
      onClickHandler = _ref.onClickHandler;
  return /*#__PURE__*/React.createElement(S.BaseButton, {
    onClick: onClickHandler
  }, children);
};

export default BaseButton;