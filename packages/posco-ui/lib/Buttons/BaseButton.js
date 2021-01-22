import React from 'react';
import * as S from './styled';

var BaseButton = function BaseButton(props) {
  var text = props.text,
      onClickHandler = props.onClickHandler;
  return /*#__PURE__*/React.createElement(S.BaseButton, {
    onClick: onClickHandler
  }, text);
};

export default BaseButton;
//# sourceMappingURL=BaseButton.js.map