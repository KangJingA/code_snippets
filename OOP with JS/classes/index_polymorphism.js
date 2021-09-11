// polymorphism
// act of redefining a method inside a derived child class
// of a parent

class Animal {
	constructor(_name) {
		this.name = _name
	}

	// eventually override this in your child classes
	// to achieve polymorphism
	makeSound() {
		console.log("Generic animal sound!")
	}
}

let animal = new Animal("Bobby")
animal.makeSound()

// create child class of parent class
// override the makeSound method

class Dog extends Animal {
	constructor(_name) {
		super(_name)
	}

	//polymorphism
	// simpy just replace the parent function with a new one
	makeSound() {
		// call the parent method
		super.makeSound()
		// this is common practice -> calling the parent functino, and then adding additional code in the child class
		console.log("woof woof")
	}
}

let tom = new Dog("Tom")
tom.makeSound()
