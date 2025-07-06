import { InstanceBase, InstanceStatus, runEntrypoint } from '@companion-module/base'
import { setFeedbacks } from './feedbacks.js'
import { setPresets } from './presets.js'

class StudioClockInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		this.timerID = null
		this.lastSec = -1
	}

	async init(config) {
		this.updateStatus(InstanceStatus.Ok)

		this.setFeedbackDefinitions(setFeedbacks(this))
		this.setPresetDefinitions(setPresets(this))

		this.timerID = setInterval(() => this.checkClocks(), 250)
	}

	// Cleanup when the module gets deleted or disabled.
	async destroy() {
		clearInterval(this.timerID)
	}

	// Update module after a config change
	async configUpdated(config) {
		clearInterval(this.timerID)
		this.init(config)
	}

	checkClocks() {
		const date = new Date()
		if (date.getSeconds() !== this.lastSec) {
			this.lastSec = date.getSeconds()
			this.checkFeedbacks()
		}
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Information',
				value:
					'This module displays configurable studio clocks on your buttons that reflect your local system time. ' +
					'Make sure that the system clock is set correctly. It is strongly recommended to synchronize it with an NTP server. ' +
					'The clock design itself is set individually via the respective feedback configuration. ' +
					'You can select the renderer output method for this instance here. Selecting “ImageBuffer” may improve rendering performance, but the resulting graphics resolution is rather limited.',
			},
			{
				type: 'dropdown',
				id: 'output',
				width: 6,
				choices: [
					{ id: 'png64', label: 'PNG (288 x 288 px)' },
					{ id: 'imagebuffer', label: 'ImageBuffer (72 x 72 px)' },
				],
				default: 'png64',
				label: 'Output Method',
				tooltip: 'Select the output method for the clock rendering.',
			},
		]
	}
}

runEntrypoint(StudioClockInstance)
