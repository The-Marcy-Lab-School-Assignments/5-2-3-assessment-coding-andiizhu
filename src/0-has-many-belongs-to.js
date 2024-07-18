const { getId } = require("./utils");

class ToDoItem {
	constructor(description, priorityLevel, dueDate) {
		this.description = description;
		this.priorityLevel = priorityLevel;
		this.isDone = false;
		this.dueDate = dueDate;
		this.id = getId();
	}
	printDescription() {
		return this.description;
	}
}

class ToDoList {
	static #allLists = [];
	currentList = [];
	constructor(name) {
		this.name = name;
		this.id = getId();
		ToDoList.#allLists.push(this);
	}
	createItem(description, priorityLevel) {
		let newItem = new ToDoItem(description, priorityLevel);
		this.currentList.push(newItem);
		return newItem;
	}
	getItems() {
		return [...this.currentList];
	}
	getCompletedCount() {
		return [...this.currentList].filter((e) => e.isDone === true).length;
	}
	getID() {
		return this.id;
	}
	static list() {
		return [...ToDoList.#allLists];
	}
	static findBy(id) {
		return [...ToDoList.#allLists].filter((e) => e.id === id)[0];
	}
	static allListLength() {
		return [...ToDoList.#allLists].length;
	}
}

module.exports = {
	ToDoItem,
	ToDoList,
};
