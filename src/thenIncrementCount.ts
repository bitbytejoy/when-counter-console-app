import { Data } from "./Data";
import { runIncrementCount } from "./runIncrementCount";

export function thenIncrementCount(data: Data) {
	data.count = runIncrementCount(data.count);
}
