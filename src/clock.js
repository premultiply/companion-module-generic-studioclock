import { createCanvas } from 'canvas'

export class StudioClock {
	constructor(width, height) {
		this.CurrentDate = new Date()

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

		this.canvas.height = this.canvas.offsetHeight
		this.canvas.width = this.canvas.offsetWidth

		this.radiusExt = (this.canvas.width * 0.9) / 2
		this.radius = (this.canvas.width * 0.8) / 2
		this.lengthSeg = 10 * (this.radius / 36)
		this.radiusDot = (this.lengthSeg / 4) * 0.47
		this.radiusMinorDot = this.radiusDot

		this.centerX = this.canvas.height / 2
		this.centerY = this.canvas.width / 2

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

		this.drawCircles()
		this.drawDigits()
		this.drawColon(this.CurrentDate.getSeconds() % 2 === 0)

		return this.canvas.toDataURL('image/png').split(';base64,')[1]
	}

	drawCircles() {
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
			if (this.config.reverseDirection ? i < this.CurrentDate.getSeconds() : i <= this.CurrentDate.getSeconds()) {
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
		this.drawDigit(-2 * (this.radius / 3), Math.floor(this.CurrentDate.getHours() / 10))
		this.drawDigit(-7 * (this.radius / 24), this.CurrentDate.getHours() % 10)
		this.drawDigit(7 * (this.radius / 24), Math.floor(this.CurrentDate.getMinutes() / 10))
		this.drawDigit(2 * (this.radius / 3), this.CurrentDate.getMinutes() % 10)
	}

	drawDigit(posX, value) {
		var color = this.Digits[value][0] ? this.config.colorDigit : this.config.colorDigitColonOff
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + 0.18 * this.lengthSeg - (5 * this.lengthSeg) / 18,
			this.centerY - this.lengthSeg,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + 0.18 * this.lengthSeg,
			this.centerY - this.lengthSeg,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + 0.18 * this.lengthSeg + (5 * this.lengthSeg) / 18,
			this.centerY - this.lengthSeg,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()

		color = this.Digits[value][1] ? this.config.colorDigit : this.config.colorDigitColonOff
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + this.lengthSeg / 2 + 0.132 * this.lengthSeg,
			this.centerY - (14 * this.lengthSeg) / 18,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + this.lengthSeg / 2 + 0.088 * this.lengthSeg,
			this.centerY - this.lengthSeg / 2,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + this.lengthSeg / 2 + 0.044 * this.lengthSeg,
			this.centerY - (4 * this.lengthSeg) / 18,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()

		color = this.Digits[value][2] ? this.config.colorDigit : (color = this.config.colorDigitColonOff)
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + this.lengthSeg / 2 - 0.132 * this.lengthSeg,
			this.centerY + (14 * this.lengthSeg) / 18,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + this.lengthSeg / 2 - 0.088 * this.lengthSeg,
			this.centerY + this.lengthSeg / 2,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + this.lengthSeg / 2 - 0.044 * this.lengthSeg,
			this.centerY + (4 * this.lengthSeg) / 18,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()

		color = this.Digits[value][3] ? this.config.colorDigit : this.config.colorDigitColonOff
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - 0.18 * this.lengthSeg - (5 * this.lengthSeg) / 18,
			this.centerY + this.lengthSeg,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - 0.18 * this.lengthSeg,
			this.centerY + this.lengthSeg,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - 0.18 * this.lengthSeg + (5 * this.lengthSeg) / 18,
			this.centerY + this.lengthSeg,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()

		color = this.Digits[value][4] ? this.config.colorDigit : this.config.colorDigitColonOff
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - this.lengthSeg / 2 - 0.132 * this.lengthSeg,
			this.centerY + (14 * this.lengthSeg) / 18,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - this.lengthSeg / 2 - 0.088 * this.lengthSeg,
			this.centerY + this.lengthSeg / 2,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - this.lengthSeg / 2 - 0.044 * this.lengthSeg,
			this.centerY + (4 * this.lengthSeg) / 18,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()

		color = this.Digits[value][5] ? this.config.colorDigit : this.config.colorDigitColonOff
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - this.lengthSeg / 2 + 0.132 * this.lengthSeg,
			this.centerY - (14 * this.lengthSeg) / 18,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - this.lengthSeg / 2 + 0.088 * this.lengthSeg,
			this.centerY - this.lengthSeg / 2,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - this.lengthSeg / 2 + 0.044 * this.lengthSeg,
			this.centerY - (4 * this.lengthSeg) / 18,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()

		color = this.Digits[value][6] ? this.config.colorDigit : this.config.colorDigitColonOff
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX - (5 * this.lengthSeg) / 18,
			this.centerY,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(this.centerX + posX, this.centerY, this.radiusDot, 0, 2 * Math.PI, false)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + posX + (5 * this.lengthSeg) / 18,
			this.centerY,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = color
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		if (color == this.config.colorDigit || !this.config.hideStrokeWhenOff) this.context.stroke()
	}

	drawColon(active) {
		this.context.beginPath()
		this.context.arc(
			this.centerX - 0.066 * this.lengthSeg,
			this.centerY + this.lengthSeg / 3,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = active ? this.config.colorColon : this.config.colorDigitColonOff
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		this.context.stroke()
		this.context.beginPath()
		this.context.arc(
			this.centerX + 0.066 * this.lengthSeg,
			this.centerY - this.lengthSeg / 3,
			this.radiusDot,
			0,
			2 * Math.PI,
			false,
		)
		this.context.fillStyle = active ? this.config.colorColon : this.config.colorDigitColonOff
		this.context.fill()
		this.context.lineWidth = 1
		this.context.strokeStyle = this.config.colorStroke
		this.context.stroke()
	}
}
