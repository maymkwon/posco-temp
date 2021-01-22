import React from 'react';
import { mount } from 'enzyme';
import BaseButton from '../BaseButton';
var clickFn = jest.fn();
describe('Button', function () {
  it('should simulate click', function () {
    var component = mount( /*#__PURE__*/React.createElement(BaseButton, {
      onClickHandler: clickFn,
      text: "Hello"
    }));
    component.find(BaseButton).simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});
//# sourceMappingURL=BaseButton.test.js.map