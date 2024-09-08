import { read } from "fs";
import readline from "readline-sync";
import { whenAppStarts } from "./whenAppStarts";
import { Data } from "./Data";

// When X happens, then do Y by running Z

function main() {
	const data: Data = {
		count: 0
	};

	whenAppStarts(data);
}

main();

/*
function main() {
	let data = {
		count: 0,
	};
	console.log("Count: ", data.count);

	while(true) {
		let input = readline.question("Please enter something: ");

		if (input === "q") {
			process.exit();
		} else if (input === "+") {
			data.count++;
			console.log("Count: ", data.count);
		} else {
			console.log("Invalid command");
			console.log("Count: ", data.count);
		}
	}
}
*/
