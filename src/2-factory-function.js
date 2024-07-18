const bankAccountFactory = (balance = 0) => {
	let bankBalance = balance;
	const bankAccount = {
		checkBalance() {
			return bankBalance;
		},
		add(num) {
			bankBalance = bankBalance + num;
			console.log(`$${num} added.`);
		},
		subtract(num) {
			bankBalance = bankBalance - num;
			console.log(`$${num} subtracted.`);
		},
	};
	return bankAccount;
};

module.exports = {
	bankAccountFactory,
};
