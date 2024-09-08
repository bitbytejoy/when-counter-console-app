import { Data } from "./Data";
import { runShowCount } from "./runShowCount";

export function thenShowCount(data: Data) {
	runShowCount(data.count);
}
