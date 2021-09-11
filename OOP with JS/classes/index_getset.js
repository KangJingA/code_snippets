// getters and setters
// used to define methods in a class
// which are then used as properties

class Square {
	constructor(_width) {
		this.width = _width
		this.height = _width
		this.numbOfRequestsForArea = 0
	}

	// its a method but returns a property
	get area() {
		this.numbOfRequestsForArea++
		return this.height * this.width
	}

	// perform method
	set area(area) {
		this.width = Math.sqrt(area)
		this.height = this.width
	}
}

let square1 = new Square(2)
// console.log(square1.area)
