import { Data } from "./Data";
import { runShowCount } from "./runShowCount";
import { runShowInvalidCommand } from "./runShowInvalidCommand";

export function whenInvalidInputIsEntered(data: Data) {
	runShowInvalidCommand();
	runShowCount(data.count);
}
