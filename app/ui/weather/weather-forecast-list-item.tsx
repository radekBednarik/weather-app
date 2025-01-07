import type { FC } from "react";
import defaultIcon from "../../../public/weather-icons/clearsky_day.png";
import ForecastIcon from "../icons/forecast-icon";

interface WeatherForecastListItemProps {
	time: string;
	iconName?: string;
	temperature?: number;
	key: number;
}

const WeatherForecastListItem: FC<WeatherForecastListItemProps> = ({
	time,
	iconName,
	temperature,
	key,
}) => {
	const icon = iconName ? `/weather-icons/${iconName}.png` : defaultIcon;
	return (
		<div
			key={key}
			className="flex flex-row justify-between items-center p-2 border shadow-md rounded-md mb-2"
		>
			<div id="time">{time}</div>

			{iconName ? (
				<div id="iconName">
					<ForecastIcon
						icon={icon}
						alt={`For the next hour it should be ${time}.`}
						width={120}
						height={120}
					/>
				</div>
			) : undefined}

			{temperature ? <div id="temperature">{temperature}</div> : undefined}
		</div>
	);
};

export default WeatherForecastListItem;
