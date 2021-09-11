// to create a child class from a generic one
// while still maintain the features of the parent + with extra

// Parent/Generic class
class Person {
	constructor(_name, _age) {
		this.name = _name
		this.age = _age
	}

	describe() {
		console.log(`I am ${this.name} and I am ${this.age} years old.`)
	}
}

// child class
// extends inherits the parent class into the child
// takes in all the attributes and behaviour from the parent
class Programmer extends Person {
	constructor(_name, _age, _yearsOfExperience) {
		// call the parent constructor
		// super keyword will access and call the object's parent
		super(_name, _age)

		// after super, you can add your customise behaviour of the child
		this.yearsOfExperience = _yearsOfExperience
	}

	code() {
		console.log(`${this.name} is coding`)
	}
}

let person1 = new Person("Jeff", 50)
let programmer1 = new Programmer("Tom", 40, 12)

const programmers = [
	new Programmer("Mel", 40, 2),
	new Programmer("Jerry", 20, 3),
]

function developSoftware(programmers) {
	for (let programmer of programmers) {
		programmer.code()
	}
}

developSoftware(programmers)
