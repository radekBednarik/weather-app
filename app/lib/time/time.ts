import { addHours, isWithinInterval, subHours } from "date-fns";

export function isWithinHoursInterval(
	currentDate: string,
	referenceDate: string,
	subHour: number,
	addHour: number,
) {
	const start = subHours(new Date(referenceDate), subHour);
	const end = addHours(new Date(referenceDate), addHour);

	const result = isWithinInterval(new Date(currentDate), { start, end });

	return result;
}
