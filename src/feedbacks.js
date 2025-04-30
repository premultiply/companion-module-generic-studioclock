import { combineRgb } from '@companion-module/base'

export function setFeedbacks(self) {
	const feedbacks = {}

	feedbacks.renderClock = {
		type: 'advanced',
		name: 'Render Clock',
		description: 'Renders a beautiful studio-style clock to the button',
		options: [
			{
				id: 'colorStroke',
				type: 'colorpicker',
				label: 'Stroke Color',
				enableAlpha: true,
				returnType: 'string',
				default: 'rgba(0, 0, 0, 0.0)',
			},
			{
				id: 'colorCircleOn',
				type: 'colorpicker',
				label: 'Circle Major Dots Color (On)',
				enableAlpha: true,
				returnType: 'string',
				default: 'rgba(255, 0, 0, 1)',
			},
			{
				id: 'colorCircleOff',
				type: 'colorpicker',
				label: 'Circle Major Dots Color (Off)',
				enableAlpha: true,
				returnType: 'string',
				default: 'rgba(0, 0, 0, 0.0)',
			},
			{
				id: 'reverseDirection',
				type: 'checkbox',
				label: 'Reverse Direction',
				default: false,
			},
			{
				id: 'colorCircleMinorOn',
				type: 'colorpicker',
				label: 'Circle Minor Dots Color (On)',
				enableAlpha: true,
				returnType: 'string',
				default: 'rgba(255, 0, 0, 1)',
			},
			{
				id: 'colorCircleMinorOff',
				type: 'colorpicker',
				label: 'Circle Minor Dots Color (Off)',
				enableAlpha: true,
				returnType: 'string',
				default: 'rgba(0, 0, 0, 0.0)',
			},
			{
				id: 'colorCircleExternal',
				type: 'colorpicker',
				label: 'External Circle Color',
				enableAlpha: true,
				returnType: 'string',
				default: 'rgba(255, 0, 0, 1)',
			},
			{
				id: 'colorDigit',
				type: 'colorpicker',
				label: 'Digit Color (On)',
				enableAlpha: true,
				returnType: 'string',
				default: 'rgba(255, 0, 0, 1)',
			},
			{
				id: 'colorColon',
				type: 'colorpicker',
				label: 'Colon Color (On)',
				enableAlpha: true,
				returnType: 'string',
				default: 'rgba(255, 0, 0, 1)',
			},
			{
				id: 'colorDigitColonOff',
				type: 'colorpicker',
				label: 'Digit+Colon Color (Off)',
				enableAlpha: true,
				returnType: 'string',
				default: 'rgba(0, 0, 0, 0.0)',
			},
			{
				id: 'hideStrokeWhenOff',
				type: 'checkbox',
				label: 'Hide Stroke When Digit Off',
				default: true,
			},
		],
		callback: function (feedback) {
			return { png64: self.renderPng64(feedback.options) }
		},
	}

	return feedbacks
}
