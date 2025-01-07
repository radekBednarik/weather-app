import type { FC } from "react";
import { CgUnavailable } from "react-icons/cg";
import { WiThermometer } from "react-icons/wi";
import ForecastImage from "../images/forecast-image";

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
	return (
		<div className="flex flex-row justify-start gap-10 items-center p-4 border-b mb-2">
			<div id="time" className="text-5xl">
				{time}
			</div>
			<VerticalSplitter />
			<SummaryImage iconName={iconName} />
			<VerticalSplitter />
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
				<div
					id="temperature"
					className="flex flex-row items-center justify-start"
				>
					<WiThermometer className="size-28" />
					<span className="text-5xl -m-4">{temperature.toFixed(1)}</span>
				</div>
			) : (
				<CgUnavailable />
			)}
		</>
	);
};

interface SummaryImageProps {
	iconName?: string;
}

const SummaryImage: FC<SummaryImageProps> = ({ iconName }) => {
	return (
		<>
			{iconName ? (
				<div id="iconName">
					<ForecastImage
						icon={`/weather-icons/${iconName}.png`}
						alt={`For the next hour it should be ${iconName}.`}
						width={120}
						height={120}
					/>
				</div>
			) : (
				<CgUnavailable className="size-28" />
			)}
		</>
	);
};

const VerticalSplitter = () => {
	return <div className="text-5xl">|</div>;
};
