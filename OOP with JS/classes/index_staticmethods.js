// static method
// method that you define on a class but
// not actually part of the instantiated object
// does not require instance of the class to be created in order to be used

// should still be relevant for the class
// treat is as a helper function

class Square {
	constructor(_width) {
		this.width = _width
		this.height = _width
	}

	// static method
	// compare 2 square instance
	static equals(square1, square2) {
		return square1.width * square1.height === square2.width * square2.height
	}

	static isValidDimensions(square) {
		return square.width === square.height
	}
}

let square1 = new Square(8)
let square2 = new Square(9)

console.log(Square.equals(square1, square2))
console.log(Square.isValidDimensions(square1))
