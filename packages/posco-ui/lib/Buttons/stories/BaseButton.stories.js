import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import BaseButton from '../BaseButton';
export default {
  title: 'Changeup Ground components/Buttons',
  component: BaseButton
};
export var withText = function withText() {
  var label = text('children', 'BUTTON');
  return /*#__PURE__*/React.createElement(BaseButton, {
    onClickHandler: action('button-click')
  }, label);
};
withText.story = {
  name: 'Default',
  parameters: {
    jest: ['BaseButton.test.tsx']
  }
};
export var RoundButton = function RoundButton() {
  return /*#__PURE__*/React.createElement(BaseButton, {
    onClickHandler: action('button-click')
  }, "Click");
};
export var WhatIsThat = function WhatIsThat() {
  return /*#__PURE__*/React.createElement(BaseButton, {
    onClickHandler: action('button-click')
  }, "Click");
};