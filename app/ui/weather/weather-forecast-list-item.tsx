import type { FC } from "react";
import { CgUnavailable } from "react-icons/cg";
import { WiThermometer } from "react-icons/wi";
import defaultIcon from "../../../public/weather-icons/clearsky_day.png";
import ForecastIcon from "../icons/forecast-icon";

interface WeatherForecastListItemProps {
	time: string;
	iconName?: string;
	temperature?: number;
}

const WeatherForecastListItem: FC<WeatherForecastListItemProps> = ({
	time,
	iconName,
	temperature,
}) => {
	const icon = iconName ? `/weather-icons/${iconName}.png` : defaultIcon;
	return (
		<div className="flex flex-row justify-between items-center px-4 border shadow-md rounded-md mb-2">
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

			<Temperature temperature={temperature} />
		</div>
	);
};

export default WeatherForecastListItem;

interface TemperatureProps {
	temperature?: number;
}

const Temperature: FC<TemperatureProps> = ({ temperature }) => {
	return (
		<>
			{temperature ? (
				<div id="temperature" className="flex flex-row items-center">
					<WiThermometer className="size-28" />
					<span className="text-5xl">{temperature.toFixed(1)}</span>
				</div>
			) : (
				<CgUnavailable />
			)}{" "}
		</>
	);
};

const ForecastImage = () => {};
