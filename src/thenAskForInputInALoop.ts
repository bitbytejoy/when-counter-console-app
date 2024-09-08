import { Data } from "./Data";
import { runInputLoop } from "./runInputLoop";
import { whenInvalidInputIsEntered } from "./whenInvalidInputIsEntered";
import { whenPlusIsEntered } from "./whenPlusIsEntered";
import { whenQIsEntered } from "./whenQIsEntered";

export function thenAskForInputInALoop(data: Data) {
	runInputLoop(
		() => whenQIsEntered(data),
		() => whenPlusIsEntered(data),
		() => whenInvalidInputIsEntered(data)
	);
}
