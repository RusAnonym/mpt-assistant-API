import { Interval } from "simple-scheduler-task";

import InternalUtils from "./utils";

import server from "./server";
import "../www/loader";

InternalUtils.MPT.updateData().then();

new Interval(async () => await InternalUtils.MPT.updateData(), 5 * 60 * 1000);

server.listen(443, "0.0.0.0", (err, address) => {
	if (err) {
		console.error(err);
	}
	console.log(`Server listening at ${address}`);
});
