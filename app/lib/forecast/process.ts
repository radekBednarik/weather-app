import type { MetJsonForecast } from "@/app/lib/met-api/declarations";
import { isWithinHoursInterval } from "@/app/lib/time/time";

export function getSpecificTimepointForecast(
	data: MetJsonForecast,
	timestamp: number,
) {
	const filtered = data.properties.timeseries.filter((step) => {
		// summary is just a name of the icon
		const summary = step.data.next_1_hours?.summary;

		if (summary) {
			const stepTimestamp = new Date(step.time).getTime();

			if (isWithinHoursInterval(timestamp, stepTimestamp, 1, 1)) {
				return summary;
			}
		}
	});

	if (filtered.length > 1 || filtered.length === 0) {
		console.error(
			"There can be only one filtered ForecastTimeStep. Something went very wrong.",
		);
		return undefined;
	}

	return filtered[0];
}
