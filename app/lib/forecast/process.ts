import type { MetJsonForecast } from "@/app/lib/met-api/declarations";
import { isWithinHoursInterval } from "@/app/lib/time/time";

export function getSpecificTimepointForecast(
	data: MetJsonForecast,
	currentDate: string,
) {
	const filtered = data.properties.timeseries.filter((step) => {
		// summary is just a name of the icon
		const summary = step.data.next_1_hours?.summary.symbol_code;

		if (summary) {
			const stepTimestamp = step.time;

			if (isWithinHoursInterval(currentDate, stepTimestamp, 1, 1)) {
				return summary;
			}
		}
	});

	if (filtered.length === 0) {
		console.error(
			"There must be at least one filtered ForecastTimeStep. Something went very wrong.",
		);
		return undefined;
	}

	return filtered[filtered.length - 1];
}
