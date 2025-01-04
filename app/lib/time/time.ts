import { addHours, isWithinInterval, subHours } from "date-fns";

export function isWithinHoursInterval(
	timestamp: number,
	referenceTimestamp: number,
	subHour: number,
	addHour: number,
) {
	const start = subHours(referenceTimestamp, subHour);
	const end = addHours(referenceTimestamp, addHour);

	return isWithinInterval(timestamp, { start, end });
}
