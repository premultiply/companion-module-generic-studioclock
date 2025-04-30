import { InstanceBase, InstanceStatus, runEntrypoint } from '@companion-module/base'

import { setFeedbacks } from './feedbacks.js'
import { StudioClock } from './clock.js'

class StudioClockInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		this.timerID = null
		this.lastSec = -1
	}

	async init(config) {
		this.updateStatus(InstanceStatus.Ok)

		this.setFeedbackDefinitions(setFeedbacks(this))
		this.setActionDefinitions([])
		this.setVariableDefinitions([])
		this.setVariableValues({})
		this.setPresetDefinitions([])

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

	renderPng64(config) {
		const clock = new StudioClock(256, 256)
		return clock.RenderClock(config)
	}

	// Return config fields for web config
	getConfigFields() {
		return []
	}
}

runEntrypoint(StudioClockInstance)
