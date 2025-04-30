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
	const colorRedStroke = 'rgba(68, 0, 0, 0.5)'

	const defaultStyle = {
		text: '',
		size: '7',
		color: colorWhite,
		bgcolor: colorBlack,
		show_topbar: false,
	}

	presets['classic'] = {
		type: 'button',
		category: 'Layout',
		name: 'Classic',
		style: defaultStyle,
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
				style: {
					color: colorWhite,
					bgcolor: colorBlack,
				},
				options: {
					colorStroke: colorRedStroke,
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

	presets['reversedClassic'] = {
		type: 'button',
		category: 'Layout',
		name: 'Classic',
		style: defaultStyle,
		previewStyle: {
			text: 'Reversed Classic',
			size: '14',
			color: colorRed,
			bgcolor: colorBlack,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				style: {
					color: colorWhite,
					bgcolor: colorBlack,
				},
				options: {
					colorStroke: colorRedStroke,
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
		style: defaultStyle,
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
				style: {
					color: colorWhite,
					bgcolor: colorBlack,
				},
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
				style: {
					color: colorBlack,
					bgcolor: colorWhite,
				},
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

	presets['world'] = {
		type: 'button',
		category: 'Layout',
		name: 'World',
		style: defaultStyle,
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
				style: {
					color: colorWhite,
					bgcolor: colorBlack,
				},
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

	presets['android'] = {
		type: 'button',
		category: 'Layout',
		name: 'Android',
		style: defaultStyle,
		previewStyle: {
			text: 'Android',
			size: '14',
			color: colorGreen,
			bgcolor: colorBlack,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: 'renderClock',
				style: {
					color: colorWhite,
					bgcolor: colorBlack,
				},
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

	return presets
}
