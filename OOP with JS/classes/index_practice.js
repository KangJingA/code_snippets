//List Binding class

class ListBinding {
	// html element
	constructor(element) {
		this.listElement = element
		this.textList = []
	}

	// makes an li tag with text inside
	static createListItem(text) {
		const li = document.createElement("li")
		li.textContent = text
		return li
	}

	// update DOM with elements in this.textList
	update() {
		// remove all existing li tags
		console.log(this.listElement)
		while (this.listElement.firstChild) {
			this.listElement.removeChild(this.listElement.firstChild)
		}

		// fill list with li
		for (const text of this.textList) {
			this.listElement.appendChild(ListBinding.createListItem(text))
		}
	}

	add(text) {
		this.textList.push(text)
		this.update()
	}

	remove(index) {
		//remove at this index,
		// remove 1 only
		this.textList.splice(index, 1)
		this.update()
	}
}

const myList = document.getElementById("myList")

const listBinding = new ListBinding(myList)
