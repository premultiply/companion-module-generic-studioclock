import { combineRgb } from '@companion-module/base'

export function setPresets(self) {
	const presets = {}

	const colorWhite = 'rgb(255, 255, 255)'
	const colorRed = 'rgb(255, 0, 0)'
	const colorGreen = 'rgb(0, 204, 0)'
	const colorYellow = 'rgb(255, 255, 0)'
	const colorBlue = 'rgb(0, 51, 204)'
	const colorPurple = 'rgb(255, 0, 255)'
	const colorDarkRed = 'rgb(102, 0, 0)'
	const colorBlack = 'rgb(0, 0, 0)'

	const colorTransparent = 'rgba(0, 0, 0, 0.0)'

	presets['companion'] = {
		type: 'button',
		category: 'Layout',
		name: 'Companion',
		style: {
			text: '',
			size: '7',
			color: '#eeeeee',
			bgcolor: '#151515',
			show_topbar: false,
		},
		previewStyle: {
			text: 'Companion',
			size: '14',
			color: '#eeeeee',
			bgcolor: '#151515',
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: colorTransparent,
					colorCircleOn: '#6e6e6e',
					colorCircleOff: colorTransparent,
					reverseDirection: false,
					colorCircleMinorOn: '#f3dee0',
					colorCircleMinorOff: colorTransparent,
					colorCircleExternal: '#a20210',
					colorDigit: '#eeeeee',
					colorColon: '#d50215',
					colorDigitColonOff: colorTransparent,
					hideStrokeWhenOff: true,
				},
			},
		],
	}

	presets['classic'] = {
		type: 'button',
		category: 'Layout',
		name: 'Classic',
		style: {
			text: '',
			size: '7',
			color: colorRed,
			bgcolor: colorBlack,
			show_topbar: false,
		},
		previewStyle: {
			text: 'Classic',
			size: '14',
			color: colorRed,
			bgcolor: colorBlack,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: 'rgba(68, 0, 0, 0.5)',
					colorCircleOn: colorRed,
					colorCircleOff: colorTransparent,
					reverseDirection: false,
					colorCircleMinorOn: colorRed,
					colorCircleMinorOff: colorTransparent,
					colorCircleExternal: colorRed,
					colorDigit: colorRed,
					colorColon: colorRed,
					colorDigitColonOff: colorTransparent,
					hideStrokeWhenOff: true,
				},
			},
		],
	}

	presets['reversed'] = {
		type: 'button',
		category: 'Layout',
		name: 'Reversed',
		style: {
			text: '',
			size: '7',
			color: colorWhite,
			bgcolor: colorBlack,
			show_topbar: false,
		},
		previewStyle: {
			text: 'Reversed',
			size: '14',
			color: colorRed,
			bgcolor: colorBlack,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: 'rgba(68, 0, 0, 0.5)',
					colorCircleOn: colorTransparent,
					colorCircleOff: colorRed,
					reverseDirection: true,
					colorCircleMinorOn: colorTransparent,
					colorCircleMinorOff: colorRed,
					colorCircleExternal: colorRed,
					colorDigit: colorRed,
					colorColon: colorRed,
					colorDigitColonOff: colorTransparent,
					hideStrokeWhenOff: true,
				},
			},
		],
	}

	presets['white'] = {
		type: 'button',
		category: 'Layout',
		name: 'White',
		style: {
			text: '',
			size: '7',
			color: colorWhite,
			bgcolor: colorBlack,
			show_topbar: false,
		},
		previewStyle: {
			text: 'White',
			size: '14',
			color: colorWhite,
			bgcolor: colorBlack,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: colorTransparent,
					colorCircleOn: colorWhite,
					colorCircleOff: colorTransparent,
					reverseDirection: false,
					colorCircleMinorOn: colorWhite,
					colorCircleMinorOff: colorTransparent,
					colorCircleExternal: colorWhite,
					colorDigit: colorWhite,
					colorColon: colorWhite,
					colorDigitColonOff: colorTransparent,
					hideStrokeWhenOff: true,
				},
			},
		],
	}

	presets['inverted'] = {
		type: 'button',
		category: 'Layout',
		name: 'Inverted',
		style: {
			text: '',
			size: '7',
			color: colorBlack,
			bgcolor: colorWhite,
			show_topbar: false,
		},
		previewStyle: {
			text: 'Inverted',
			size: '14',
			color: colorBlack,
			bgcolor: colorWhite,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: colorTransparent,
					colorCircleOn: colorBlack,
					colorCircleOff: 'rgba(0, 0, 0, 0.1)',
					reverseDirection: false,
					colorCircleMinorOn: colorBlack,
					colorCircleMinorOff: 'rgba(0, 0, 0, 0.1)',
					colorCircleExternal: colorBlack,
					colorDigit: colorBlack,
					colorColon: colorBlack,
					colorDigitColonOff: colorTransparent,
					hideStrokeWhenOff: false,
				},
			},
		],
	}

	presets['trade'] = {
		type: 'button',
		category: 'Layout',
		name: 'Trade',
		style: {
			text: '',
			size: '7',
			color: '#7ca893',
			bgcolor: colorBlack,
			show_topbar: false,
		},
		previewStyle: {
			text: 'World',
			size: '14',
			color: '#7ca893',
			bgcolor: colorBlack,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: colorTransparent,
					colorCircleOn: '#ca3a56',
					colorCircleOff: colorTransparent,
					reverseDirection: false,
					colorCircleMinorOn: '#ca3a56',
					colorCircleMinorOff: colorTransparent,
					colorCircleExternal: '#7ca893',
					colorDigit: '#7ca893',
					colorColon: '#7ca893',
					colorDigitColonOff: colorTransparent,
					hideStrokeWhenOff: true,
				},
			},
		],
	}

	presets['robo'] = {
		type: 'button',
		category: 'Layout',
		name: 'Robo',
		style: {
			text: '',
			size: '7',
			color: 'rgba(0, 255, 0, 1)',
			bgcolor: colorBlack,
			show_topbar: false,
		},
		previewStyle: {
			text: 'Robo',
			size: '14',
			color: 'rgba(0, 255, 0, 1)',
			bgcolor: colorBlack,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: 'rgba(0, 0, 255, 0.1)',
					colorCircleOn: 'rgba(0, 0, 255, 1)',
					colorCircleOff: 'rgba(0, 0, 255, 0.1)',
					reverseDirection: false,
					colorCircleMinorOn: 'rgba(0, 0, 255, 1)',
					colorCircleMinorOff: 'rgba(0, 0, 255, 0.1)',
					colorCircleExternal: 'rgba(0, 0, 255, 1)',
					colorDigit: 'rgba(0, 255, 0, 1)',
					colorColon: 'rgba(0, 255, 0, 1)',
					colorDigitColonOff: 'rgba(0, 255, 0, 0.1)',
					hideStrokeWhenOff: false,
				},
			},
		],
	}

	presets['modern'] = {
		type: 'button',
		category: 'Layout',
		name: 'Modern',
		style: {
			text: '',
			size: '7',
			color: '#eff7e8',
			bgcolor: colorBlack,
			show_topbar: false,
		},
		previewStyle: {
			text: 'Modern',
			size: '14',
			color: '#eff7e8',
			bgcolor: colorBlack,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: colorTransparent,
					colorCircleOn: '#00baff',
					colorCircleOff: colorTransparent,
					reverseDirection: false,
					colorCircleMinorOn: '#00baff',
					colorCircleMinorOff: colorTransparent,
					colorCircleExternal: '#eff7e8',
					colorDigit: '#eff7e8',
					colorColon: '#eff7e8',
					colorDigitColonOff: colorTransparent,
					hideStrokeWhenOff: true,
				},
			},
		],
	}

	presets['device'] = {
		type: 'button',
		category: 'Layout',
		name: 'Device',
		style: {
			text: '',
			size: '7',
			color: colorRed,
			bgcolor: 'rgba(208, 213, 219, 1)',
			show_topbar: false,
		},
		previewStyle: {
			text: 'Device',
			size: '14',
			color: colorRed,
			bgcolor: 'rgba(208, 213, 219, 1)',
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: colorTransparent,
					colorCircleOn: colorRed,
					colorCircleOff: 'rgba(127, 0, 0, 0.25)',
					reverseDirection: false,
					colorCircleMinorOn: colorRed,
					colorCircleMinorOff: 'rgba(127, 0, 0, 0.25)',
					colorCircleExternal: colorRed,
					colorDigit: colorRed,
					colorColon: colorRed,
					colorDigitColonOff: 'rgba(157, 0, 0, 0.25)',
					hideStrokeWhenOff: true,
				},
			},
		],
	}

	presets['medici'] = {
		type: 'button',
		category: 'Layout',
		name: 'Medici',
		style: {
			text: '',
			size: '7',
			color: colorWhite,
			bgcolor: colorBlack,
			show_topbar: false,
		},
		previewStyle: {
			text: 'Medici',
			size: '14',
			color: '#4af663',
			bgcolor: colorBlack,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				options: {
					colorStroke: colorTransparent,
					colorCircleOn: '#4af663',
					colorCircleOff: colorTransparent,
					reverseDirection: false,
					colorCircleMinorOn: '#4af663',
					colorCircleMinorOff: colorTransparent,
					colorCircleExternal: '#4af663',
					colorDigit: '#4af663',
					colorColon: '#4af663',
					colorDigitColonOff: colorTransparent,
					hideStrokeWhenOff: false,
				},
			},
		],
	}

	return presets
}
