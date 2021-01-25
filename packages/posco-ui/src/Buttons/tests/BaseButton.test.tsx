import React from 'react';
import { mount } from 'enzyme';
import BaseButton from '../BaseButton';

const clickFn = jest.fn();
describe('Button', () => {
	it('should simulate click', () => {
		const component = mount(
			<BaseButton onClickHandler={clickFn}>Hello</BaseButton>
		);
		component.find(BaseButton).simulate('click');
		expect(clickFn).toHaveBeenCalled();
	});
});
