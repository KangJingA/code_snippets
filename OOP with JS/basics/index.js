// object literals
// object literal syntax -> what you call an object that is written just with {}
// collection of key value pairs
const circle = {
	radius: 1, // property
	location: {
		x: 2,
		y: 2,
	},
	draw: function () {
		// method
		console.log("object literal drawing")
	},
}

// problem of oject literals -> still need to duplicate code when you need multiple objects
// if object has one than 1 method, say that object has behaviour
// if object has behaviour, its better to use factory function or constructor function

// factory function
function createCircle(radius) {
	return {
		radius,
		draw: function () {
			// method
			console.log("factory function drawing")
		},
	}
}

// constructor function
// first letter should be caps
function Circle(radius) {
	// "this" is a reference to the object that is executing the piece of code
	this.radius = radius // set property of object
	let defaultLocation = { x: 0, y: 0 } //abstraction. now this prop is private and cannot be accessed outside
	this.getDefaultLocation = function () {
		// getting the private member data
		return defaultLocation
	}
	let computeOptimumLocation = function () {
		console.log("compute optimum location")
	}
	this.draw = function () {
		computeOptimumLocation()
		console.log("draw")
	}

	// first argument: "this" (the circle object)
	// second argument: property name
	// object
	Object.defineProperty(this, "defaultLocation", {
		get: function () {
			// dunction that is used to read a property
			return defaultLocation
		},
		// if you use this, you can edit
		set: function (value) {
			if (!value.x || !value.y) {
				throw new Error("invalid location")
			}
			defaultLocation = value
		},
	})
}

// under the hood
// 1. "new" operator creates an empty object {}
// 2. set "this" in Circle to point to the object {}.
// 3. return the object from Circle function
let constructorRadius = 1
const anotherCircle = new Circle(constructorRadius)

// this is the same as new operator
// first argument specifies the target of "this"
// pass and empty object, and then pass the arguments that you want to be pointed to it
Circle.call({}, 1)
Circle.apply({}, [1, 2, 3])

// primitives are copied by their value
// objects are copied by their reference

// primitives
// x and y are independent
let x = 10
let y = x // value is copied
x = 20
console.log(x) // 20
console.log(y) // 10

// objects
let a = { value: 10 }
let b = a // address/reference is copied
a.value = 20
console.log(a.value) // 20
console.log(b.value) // 20

// when object is created, its stored in memory
// memory of the object is stored in the variable

const Stopwatch = () => {
	let startTime,
		endTime,
		running,
		duration = 0

	this.start = function () {
		if (running) {
			throw new Error("Stopwatch has already started")
		}

		running = true
		startTime = new Date()
	}

	this.stop = function () {
		if (!running) {
			throw new Error("Stopwatch is not started")
		}

		running = false
		endTime = new Date()
		const seconds = (endTime.getTime() - startTime.getTime()) / 1000
		duration += seconds
	}

	this.reset = function () {
		startTime = null
		endTime = null
		running = false
		duration = 0
	}

	Object.defineProperty(this, "duration", {
		get: function () {
			return duration
		},
	})
}
