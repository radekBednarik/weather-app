import type { FC } from "react";
import { CgUnavailable } from "react-icons/cg";
import { WiRaindrops, WiStrongWind, WiThermometer } from "react-icons/wi";
import ForecastImage from "../images/forecast-image";

interface WeatherForecastListItemProps {
	time: string;
	iconName?: string;
	temperature?: number;
	precipitationAmount?: number;
	windSpeed?: number;
}

const WeatherForecastListItem: FC<WeatherForecastListItemProps> = ({
	time,
	iconName,
	temperature,
	precipitationAmount,
	windSpeed,
}) => {
	return (
		<div className="flex flex-row justify-between gap-10 items-center py-4 border-b mb-2">
			<div id="time" className="text-5xl">
				{time}
			</div>
			<VerticalSplitter />
			<SummaryImage iconName={iconName} />
			<VerticalSplitter />
			<Temperature temperature={temperature} />
			<VerticalSplitter />
			<Precipitation amount={precipitationAmount} />
			<VerticalSplitter />
			<Windspeed amount={windSpeed} />
		</div>
	);
};

export default WeatherForecastListItem;

interface WindSpeedProps {
	amount?: number;
}

const Windspeed: FC<WindSpeedProps> = ({ amount }) => {
	return (
		<>
			{amount ? (
				<div
					id="wind-speed-amount"
					className="flex flex-row items-center justify-start"
				>
					<WiStrongWind className="size-28" />
					<span className="text-5xl">{amount.toFixed(1)}</span>
				</div>
			) : (
				<div className="flex flex-row items-center justify-start">
					<WiStrongWind className="size-28" />
					<span className="text-5xl">{(0).toFixed(1)}</span>
				</div>
			)}
		</>
	);
};

interface PrecipitationProps {
	amount?: number;
}

const Precipitation: FC<PrecipitationProps> = ({ amount }) => {
	return (
		<>
			{amount ? (
				<div
					id="precipitation_amount"
					className="flex flex-row items-center justify-start"
				>
					<WiRaindrops className="size-28" />
					<span className="text-5xl -m-4">{amount.toFixed(1)}</span>
				</div>
			) : (
				<div className="flex flex-row items-center justify-start">
					<WiRaindrops className="size-28" />
					<span className="text-5xl -m-4">{(0).toFixed(1)}</span>
				</div>
			)}
		</>
	);
};

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
					<span className="text-5xl">{temperature.toFixed(1)}</span>
				</div>
			) : (
				<CgUnavailable className="size-28" />
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
