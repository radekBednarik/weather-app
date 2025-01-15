import type { MetJsonForecast } from "@/app/lib/met-api/declarations";
import {
	formatISOToMonthDayHoursMinutes,
	isWithinHoursInterval,
} from "@/app/lib/time/time";

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

export function getLocationFromForecast(data: MetJsonForecast) {
	return data.geometry.coordinates;
}

export function getTemperatureForecastTimeSeries(data: MetJsonForecast) {
	const points = data.properties.timeseries;
	const output = points.map((point) => {
		const temp = point.data.instant.details?.air_temperature;
		return {
			time: formatISOToMonthDayHoursMinutes(point.time),
			value: temp ? temp.toFixed(1) : (0).toFixed(1),
		};
	});

	return output;
}

export function getWindspeedForecastTimeSeries(data: MetJsonForecast) {
	const points = data.properties.timeseries;
	const output = points.map((point) => {
		const speed = point.data.instant.details?.wind_speed;
		return {
			time: formatISOToMonthDayHoursMinutes(point.time),
			value: speed ? speed.toFixed(1) : (0).toFixed(1),
		};
	});

	return output;
}

export function getMinimumAndMaximumValue(data: Record<string, string>[]) {
	const values = data.map((obj) => {
		return Number.parseFloat(Object.values(obj)[1]);
	});

	return { min: Math.min(...values), max: Math.max(...values) };
}
