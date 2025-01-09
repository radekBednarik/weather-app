import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { formatISOToHoursAndMinutes } from "@/app/lib/time/time";
import WeatherForecastListItem from "@/app/ui/weather/weather-forecast-list-item";
import { type FC, useContext } from "react";

interface WeatherForecastListProps {
	itemsIndexStart: number;
	itemsIndexEnd: number;
}

const WeatherForecastList: FC<WeatherForecastListProps> = ({
	itemsIndexStart,
	itemsIndexEnd,
}) => {
	const context = useContext(WeatherForecastContext);

	if (!context) throw new Error("Context cannot be undefined.");

	const points = context?.properties.timeseries.slice(
		itemsIndexStart,
		itemsIndexEnd,
	);

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
						precipitationAmount={
							point.data.next_1_hours?.details.precipitation_amount
						}
						windSpeed={point.data.instant.details?.wind_speed}
					/>
				);
			})}
		</section>
	);
};

export default WeatherForecastList;
