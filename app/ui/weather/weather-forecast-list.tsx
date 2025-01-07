"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { formatISOToHoursAndMinutes } from "@/app/lib/time/time";
import WeatherForecastListItem from "@/app/ui/weather/weather-forecast-list-item";
import { useContext } from "react";

const WeatherForecastList = () => {
	const context = useContext(WeatherForecastContext);

	if (!context) throw new Error("Context cannot be undefined.");

	const points = context?.properties.timeseries.slice(0, 12);

	return (
		<section id="forecast-hourly-list" className="mt-10">
			{points.map((point, i) => {
				const time = formatISOToHoursAndMinutes(point.time);

				return (
					<WeatherForecastListItem
						key={i}
						time={time}
						iconName={point.data.next_1_hours?.summary.symbol_code}
						temperature={point.data.instant.details?.air_temperature}
					/>
				);
			})}
		</section>
	);
};

export default WeatherForecastList;
