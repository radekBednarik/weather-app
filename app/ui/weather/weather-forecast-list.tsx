import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { formatISOToHoursAndMinutes } from "@/app/lib/time/time";
import WeatherForecastListItem from "@/app/ui/weather/weather-forecast-list-item";
import { useContext } from "react";

const WeatherForecastList = () => {
	const context = useContext(WeatherForecastContext);

	if (!context) throw new Error("Context cannot be undefined.");

	const points = context?.properties.timeseries.slice(0, 8);

	return (
		<section id="forecast-hourly-list" className="my-10 mx-auto">
			{points.map((point, i) => {
				const time = formatISOToHoursAndMinutes(point.time);

				return (
					<WeatherForecastListItem
						key={i}
						time={time}
						iconName={point.data.next_1_hours?.summary.symbol_code}
						temperature={point.data.instant.details?.air_temperature}
						precipitation_amount={
							point.data.next_1_hours?.details.precipitation_amount
						}
					/>
				);
			})}
		</section>
	);
};

export default WeatherForecastList;
