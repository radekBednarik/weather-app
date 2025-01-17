import clsx from "clsx";
import Link from "next/link";
import type { FC } from "react";
import { CgUnavailable } from "react-icons/cg";
import { FaChartLine } from "react-icons/fa6";
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
		<div className="flex flex-row justify-between gap-10 items-center py-4 border-b border-b-slate-500 mb-2">
			<div id="time" className="lg:text-5xl font-extrabold text-teal-500">
				{time.split("-")[1].trim()}
			</div>
			<VerticalSplitter />
			<SummaryImage iconName={iconName} />
			<VerticalSplitter />
			<Temperature temperature={temperature} time={time} />
			<VerticalSplitter className="hidden md:block" />
			<Precipitation amount={precipitationAmount} time={time} />
			<VerticalSplitter className="hidden lg:block" />
			<Windspeed amount={windSpeed} time={time} />
		</div>
	);
};

export default WeatherForecastListItem;

interface WindSpeedProps {
	amount?: number;
	time: string;
}

const Windspeed: FC<WindSpeedProps> = ({ amount, time }) => {
	return (
		<div className="hidden lg:block flex-row justify-center">
			{typeof amount !== "undefined" ? (
				<div
					id="wind-speed-amount"
					className="flex flex-row items-center justify-start"
				>
					<WiStrongWind className="size-14 lg:size-28" />
					<div className="lg:text-5xl">
						{amount.toFixed(1)} <span className="text-[0.5em]">m/s</span>
					</div>
					<div id="chart-windspeed" className="ml-4">
						<Link
							href={`/charts/windspeed?time=${time}`}
							aria-label="Click to access the windspeed forecast chart."
						>
							<FaChartLine className="text-slate-500" />
						</Link>
					</div>
				</div>
			) : (
				<div className="flex flex-row items-center justify-start">
					<WiStrongWind className="size-14 lg:size-28" />
					<span className="lg:text-5xl">
						{(0).toFixed(1)} <span className="text-[0.5]">m/s</span>
					</span>
				</div>
			)}
		</div>
	);
};

interface PrecipitationProps {
	amount?: number;
	time: string;
}

const Precipitation: FC<PrecipitationProps> = ({ amount, time }) => {
	return (
		<div className="hidden md:block flex-row justify-center">
			{typeof amount !== "undefined" ? (
				<div
					id="precipitation_amount"
					className="flex flex-row items-center justify-start"
				>
					<WiRaindrops className="size-14 lg:size-28" />
					<div className="lg:text-5xl -m-4">
						{amount.toFixed(1)} <span className="text-[0.5em]">mm</span>
					</div>
					<div id="chart-precipitation" className="ml-8">
						<Link
							href={`/charts/precipitation?time=${time}`}
							aria-label="Click to access the precipitation forecast chart."
						>
							<FaChartLine className="text-slate-500" />
						</Link>
					</div>
				</div>
			) : (
				<div className="flex flex-row items-center justify-start">
					<WiRaindrops className="size-14 lg:size-28" />
					<span className="lg:text-5xl -m-4">
						{(0).toFixed(1)} <span className="text-[0.5em]">mm</span>
					</span>
				</div>
			)}
		</div>
	);
};

interface TemperatureProps {
	temperature?: number;
	time: string;
}

const Temperature: FC<TemperatureProps> = ({ temperature, time }) => {
	return (
		<div className="flex flex-row justify-center">
			{typeof temperature !== "undefined" ? (
				<div
					id="temperature"
					className="flex flex-row items-center justify-start"
				>
					<WiThermometer className="size-14 lg:size-20" />
					<div className="lg:text-5xl text-base">
						{temperature.toFixed(1)}{" "}
						<span className="align-top text-[0.5em]">&deg; C</span>
					</div>
					<div id="chart-temp" className="ml-4">
						<Link
							href={`/charts/temperature?time=${time}`}
							aria-label="Click to visit chart of predicted temperatures."
						>
							<FaChartLine className="text-slate-500" />
						</Link>
					</div>
				</div>
			) : (
				<CgUnavailable className="size-14 lg:size-20" />
			)}
		</div>
	);
};

interface SummaryImageProps {
	iconName?: string;
}

const SummaryImage: FC<SummaryImageProps> = ({ iconName }) => {
	return (
		<div className="flex flex-row justify-center">
			{iconName ? (
				<div id="iconName" className="sm:w-1/6 md:w-2/6 lg:w-3/6">
					<ForecastImage
						icon={`/weather-icons/${iconName}.png`}
						alt={`For the next hour it should be ${iconName}.`}
						width={240}
						height={240}
					/>
				</div>
			) : (
				<CgUnavailable className="size-14 lg:size-20" />
			)}
		</div>
	);
};

interface VerticalSplitterProps {
	className?: string;
}

const VerticalSplitter: FC<VerticalSplitterProps> = ({ className }) => {
	return <div className={clsx("lg:text-5xl", className)}>|</div>;
};
