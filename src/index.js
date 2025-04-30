import { InstanceBase, InstanceStatus, runEntrypoint } from '@companion-module/base'

import { setFeedbacks } from './feedbacks.js'
import { StudioClock } from './clock.js'

class CanvasClockInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		this.timerID = null
		this.lastSec = -1
	}

	async init(config) {
		this.updateStatus(InstanceStatus.Ok)

		this.png64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='

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
		const curSec = date.getSeconds()

		if (curSec !== this.lastSec) {
			this.lastSec = curSec
			this.checkFeedbacks()
		}
	}

	renderPng64(config) {
		const date = new Date()
		const clock = new StudioClock(256, 256)
		return clock.RenderClock(date, config)
	}

	// Return config fields for web config
	getConfigFields() {
		return []
	}
}

runEntrypoint(CanvasClockInstance)
