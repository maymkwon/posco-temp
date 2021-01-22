import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import BaseButton from '../BaseButton';
export default {
  title: 'Sample / Button',
  component: BaseButton
};
export var withText = function withText() {
  return /*#__PURE__*/React.createElement(BaseButton, {
    text: text('value', 'Click Me'),
    onClickHandler: action('button-click')
  });
};
withText.story = {
  parameters: {
    jest: ['BaseButton.test.tsx']
  }
};
//# sourceMappingURL=BaseButton.stories.js.map