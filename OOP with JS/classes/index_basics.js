// convention: capital letter
class Rectangle {
	// constructor: method that is run only once during the life of the object
	// ran when the object is being created
	// used to set up your object
	constructor(_width, _height, _color) {
		console.log("The rectangle is being created.")

		// define instance properties here
		// "this" refers to the current object (object that is being created by that class)
		this.width = _width
		this.height = _height
		this.colour = _color
	}

	// define instance methods here

	getArea() {
		return this.width * this.height
	}

	printDescription() {
		console.log(
			`I am an rectangle of ${this.width} x ${this.height} and I am ${this.color} in color.`
		)
	}
}

let myRectangle1 = new Rectangle(3, 5, "blue")
let myRectangle2 = new Rectangle(5, 8, "red")
