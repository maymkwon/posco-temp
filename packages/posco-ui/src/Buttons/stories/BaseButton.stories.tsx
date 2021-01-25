import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import BaseButton from '../BaseButton';
export default {
	title: 'Changeup Ground components/Buttons',
	component: BaseButton,
};

export const withText = () => {
	const label = text('children', 'BUTTON');
	return (
		<BaseButton onClickHandler={action('button-click')}>{label}</BaseButton>
	);
};
withText.story = {
	name: 'Default',
	parameters: {
		jest: ['BaseButton.test.tsx'],
	},
};

export const RoundButton = () => (
	<BaseButton onClickHandler={action('button-click')}>Click</BaseButton>
);
export const WhatIsThat = () => (
	<BaseButton onClickHandler={action('button-click')}>Click</BaseButton>
);
