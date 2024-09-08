import readline from "readline-sync";

export function runInputLoop(
	onQ: () => void,
	onPlus: () => void,
	otherwise: () => void
) {
	while(true) {
		let input = readline.question("Enter q to quit, enter + to increment count: ");

		if (input === "q") {
			onQ();
		} else if (input === "+") {
			onPlus();
		} else {
			otherwise();
		}
	}
}
