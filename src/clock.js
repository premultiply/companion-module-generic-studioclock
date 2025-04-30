import { createCanvas } from 'canvas'

export class StudioClock {
	constructor(width, height) {
		this.currentDate = new Date()

		this.Digits = [
			[1, 1, 1, 1, 1, 1, 0], // 0
			[0, 1, 1, 0, 0, 0, 0], // 1
			[1, 1, 0, 1, 1, 0, 1], // 2
			[1, 1, 1, 1, 0, 0, 1], // 3
			[0, 1, 1, 0, 0, 1, 1], // 4
			[1, 0, 1, 1, 0, 1, 1], // 5
			[1, 0, 1, 1, 1, 1, 1], // 6
			[1, 1, 1, 0, 0, 0, 0], // 7
			[1, 1, 1, 1, 1, 1, 1], // 8
			[1, 1, 1, 1, 0, 1, 1], // 9
		]

		this.canvas = createCanvas(width, height)
		this.context = this.canvas.getContext('2d')

		this.radiusExt = (this.canvas.width * 0.9) / 2
		this.radius = (this.canvas.width * 0.8) / 2
		this.lengthSeg = 9 * (this.radius / 36)
		this.radiusDot = (this.lengthSeg / 4) * 0.47
		this.radiusMinorDot = this.radiusDot
		this.lengthSmallSeg = (this.lengthSeg * 3) / 5
		this.radiusSmallDot = (this.lengthSmallSeg / 4) * 0.47

		this.centerX = this.canvas.width / 2
		this.centerY = this.canvas.height / 2

		this.config = {
			colorStroke: 'rgba(68, 0, 0, 0.0)',
			colorCircleOn: 'rgba(255, 0, 0, 1)',
			colorCircleOff: 'rgba(0, 0, 0, 0.0)',
			reverseDirection: false,
			colorCircleMinorOn: 'rgba(255, 0, 0, 1)',
			colorCircleMinorOff: 'rgba(0, 0, 0, 0.0)',
			colorCircleExternal: 'rgba(255, 0, 0, 1)',
			colorDigit: 'rgba(255, 0, 0, 1)',
			colorColon: 'rgba(255, 0, 0, 1)',
			colorDigitColonOff: 'rgba(0, 0, 0, 0.0)',
			hideStrokeWhenOff: true, // digits only
		}
	}

	RenderClock(config) {
		this.config = config

		this.drawWaves()
		this.drawDigits()
		this.drawColon(this.currentDate.getSeconds() % 2 === 0)

		return this.canvas.toDataURL('image/png').split(';base64,')[1]
	}

	drawWaves() {
		for (let i = 0; i < 60; i += 5) {
			const sec_x = this.radiusExt * Math.cos(((i - 15) * 2 * Math.PI) / 60)
			const sec_y = this.radiusExt * Math.sin(((i - 15) * 2 * Math.PI) / 60)
			this.context.beginPath()
			this.context.arc(sec_x + this.centerX, sec_y + this.centerY, this.radiusDot, 0, 2 * Math.PI, false)
			this.context.fillStyle = this.config.colorCircleExternal
			this.context.fill()
			this.context.lineWidth = 1
			this.context.strokeStyle = this.config.colorStroke
			this.context.stroke()
		}
		for (let i = 0; i < 60; i++) {
			const sec_x = this.radius * Math.cos(((i - 15) * 2 * Math.PI) / 60)
			const sec_y = this.radius * Math.sin(((i - 15) * 2 * Math.PI) / 60)
			this.context.beginPath()
			this.context.arc(
				sec_x + this.centerX,
				sec_y + this.centerY,
				i % 5 === 0 ? this.radiusDot : this.radiusMinorDot,
				0,
				2 * Math.PI,
				false,
			)
			if (this.config.reverseDirection ? i < this.currentDate.getSeconds() : i <= this.currentDate.getSeconds()) {
				this.context.fillStyle = i % 5 === 0 ? this.config.colorCircleOn : this.config.colorCircleMinorOn
			} else {
				this.context.fillStyle = i % 5 === 0 ? this.config.colorCircleOff : this.config.colorCircleMinorOff
			}
			this.context.fill()
			this.context.lineWidth = 1
			this.context.strokeStyle = this.config.colorStroke
			this.context.stroke()
		}
	}

	drawDigits() {
		// Hours
		this.drawDigit(
			-2 * (this.radius / 3),
			0,
			this.lengthSeg,
			this.radiusDot,
			Math.floor(this.currentDate.getHours() / 10),
		)
		this.drawDigit(-7 * (this.radius / 24), 0, this.lengthSeg, this.radiusDot, this.currentDate.getHours() % 10)
		// Minutes
		this.drawDigit(
			7 * (this.radius / 24),
			0,
			this.lengthSeg,
			this.radiusDot,
			Math.floor(this.currentDate.getMinutes() / 10),
		)
		this.drawDigit(2 * (this.radius / 3), 0, this.lengthSeg, this.radiusDot, this.currentDate.getMinutes() % 10)
		// Seconds
		this.drawDigit(
			3 * (this.radius / 24),
			this.radius / 2,
			this.lengthSmallSeg,
			this.radiusSmallDot,
			this.currentDate.getSeconds() % 10,
		)
		this.drawDigit(
			-3 * (this.radius / 24),
			this.radius / 2,
			this.lengthSmallSeg,
			this.radiusSmallDot,
			Math.floor(this.currentDate.getSeconds() / 10),
		)
	}

	drawDigit(posX, posY, segLen, radius, digitValue) {
		const drawArc = (centerX, centerY, offsetX, offsetY, radius, color) => {
			this.context.beginPath()
			this.context.arc(centerX + offsetX, centerY + offsetY, radius, 0, 2 * Math.PI, false)
			this.context.fillStyle = color
			this.context.fill()
			if (color === this.config.colorDigit || !this.config.hideStrokeWhenOff) {
				this.context.lineWidth = 1
				this.context.strokeStyle = this.config.colorStroke
				this.context.stroke()
			}
		}

		const segments = [
			[0.18 * segLen - (5 * segLen) / 18, -segLen, this.Digits[digitValue][0]],
			[0.18 * segLen, -segLen, this.Digits[digitValue][0]],
			[0.18 * segLen + (5 * segLen) / 18, -segLen, this.Digits[digitValue][0]],
			[segLen / 2 + 0.132 * segLen, -(14 * segLen) / 18, this.Digits[digitValue][1]],
			[segLen / 2 + 0.088 * segLen, -segLen / 2, this.Digits[digitValue][1]],
			[segLen / 2 + 0.044 * segLen, -(4 * segLen) / 18, this.Digits[digitValue][1]],
			[segLen / 2 - 0.132 * segLen, (14 * segLen) / 18, this.Digits[digitValue][2]],
			[segLen / 2 - 0.088 * segLen, segLen / 2, this.Digits[digitValue][2]],
			[segLen / 2 - 0.044 * segLen, (4 * segLen) / 18, this.Digits[digitValue][2]],
			[-0.18 * segLen - (5 * segLen) / 18, segLen, this.Digits[digitValue][3]],
			[-0.18 * segLen, segLen, this.Digits[digitValue][3]],
			[-0.18 * segLen + (5 * segLen) / 18, segLen, this.Digits[digitValue][3]],
			[-segLen / 2 - 0.132 * segLen, (14 * segLen) / 18, this.Digits[digitValue][4]],
			[-segLen / 2 - 0.088 * segLen, segLen / 2, this.Digits[digitValue][4]],
			[-segLen / 2 - 0.044 * segLen, (4 * segLen) / 18, this.Digits[digitValue][4]],
			[-segLen / 2 + 0.132 * segLen, -(14 * segLen) / 18, this.Digits[digitValue][5]],
			[-segLen / 2 + 0.088 * segLen, -segLen / 2, this.Digits[digitValue][5]],
			[-segLen / 2 + 0.044 * segLen, -(4 * segLen) / 18, this.Digits[digitValue][5]],
			[-(5 * segLen) / 18, 0, this.Digits[digitValue][6]],
			[0, 0, this.Digits[digitValue][6]],
			[(5 * segLen) / 18, 0, this.Digits[digitValue][6]],
		]

		segments.forEach(([offsetX, offsetY, isActive]) => {
			const color = isActive ? this.config.colorDigit : this.config.colorDigitColonOff
			drawArc(this.centerX + posX, this.centerY + posY, offsetX, offsetY, radius, color)
		})
	}

	// Draws the colon separator for the digital clock display
	drawColon(active) {
		const drawColonDot = (xOffset, yOffset) => {
			this.context.beginPath()
			this.context.arc(this.centerX + xOffset, this.centerY + yOffset, this.radiusDot, 0, 2 * Math.PI, false)
			this.context.fillStyle = active ? this.config.colorColon : this.config.colorDigitColonOff
			this.context.fill()
			this.context.lineWidth = 1
			this.context.strokeStyle = this.config.colorStroke
			this.context.stroke()
		}

		drawColonDot(-0.066 * this.lengthSeg, this.lengthSeg / 3)
		drawColonDot(0.066 * this.lengthSeg, -this.lengthSeg / 3)
	}
}
