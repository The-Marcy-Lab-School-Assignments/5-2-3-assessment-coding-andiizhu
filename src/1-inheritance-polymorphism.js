class Phone {
	constructor(phoneNumber) {
		this.phoneNumber = phoneNumber;
		this.contacts = [];
	}
	addContact(contactObj) {
		if (contactObj.name === undefined || contactObj.phoneNumber === undefined) {
			return "Invalid";
		} else if (contactObj.phoneNumber.length !== 10) {
			return "Invalid";
		} else {
			this.contacts.push(contactObj);
			return `${contactObj.name} added.`;
		}
	}
	removeContact(contactString) {
		let index = this.contacts.findIndex((e) => e.name === contactString);
		if (index === -1) return "Contact not found.";
		this.contacts.splice(index, 1);
		return `${contactString} removed.`;
	}
	makeCall(contactInfo) {
		let index = this.contacts.findIndex(
			(e) => e.name === contactInfo || e.phoneNumber === contactInfo
		);
		if (index >= 0) {
			let contactName = this.contacts[index].name;
			return `Calling ${contactName}...`;
		}
		if (index === -1 && contactInfo.length === 10)
			return `Calling ${contactInfo}...`;
		if (index === -1) return "Invalid";
	}
}

class AppleIPhone extends Phone {
	constructor(phoneNumber, model) {
		super(phoneNumber);
		this.model = model;
	}
	sendIMessage(myIPhone, randomIMsg) {
		if (myIPhone instanceof AppleIPhone) {
			return `Message: ${randomIMsg} - sent from ${this.model}`;
		} else return "Message could not be sent.";
	}
}

module.exports = {
	Phone,
	AppleIPhone,
};
