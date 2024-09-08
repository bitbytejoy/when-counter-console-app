import { Data } from "./Data";
import { thenAskForInputInALoop } from "./thenAskForInputInALoop";
import { thenShowCount } from "./thenShowCount";

export function whenAppStarts(data: Data) {
	thenShowCount(data);
	thenAskForInputInALoop(data);
}
