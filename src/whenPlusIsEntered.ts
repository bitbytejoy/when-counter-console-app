import { Data } from "./Data";
import { thenIncrementCount } from "./thenIncrementCount";
import { thenShowCount } from "./thenShowCount";

export function whenPlusIsEntered(data: Data) {
	thenIncrementCount(data);
	thenShowCount(data);
}
