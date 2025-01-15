import clsx from "clsx";
import type { FC } from "react";
import { CgUnavailable } from "react-icons/cg";
import { WiRaindrops, WiStrongWind, WiThermometer } from "react-icons/wi";
import ForecastImage from "../images/forecast-image";
import { FaChartLine } from "react-icons/fa6";
import Link from "next/link";

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
        {time}
      </div>
      <VerticalSplitter />
      <SummaryImage iconName={iconName} />
      <VerticalSplitter />
      <Temperature temperature={temperature} />
      <VerticalSplitter className="hidden md:block" />
      <Precipitation amount={precipitationAmount} />
      <VerticalSplitter className="hidden lg:block" />
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
    <div className="hidden lg:block flex-row justify-center">
      {amount ? (
        <div
          id="wind-speed-amount"
          className="flex flex-row items-center justify-start"
        >
          <WiStrongWind className="size-14 lg:size-28" />
          <span className="lg:text-5xl">
            {amount.toFixed(1)} <span className="text-[0.5em]">m/s</span>
          </span>
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
}

const Precipitation: FC<PrecipitationProps> = ({ amount }) => {
  return (
    <div className="hidden md:block flex-row justify-center">
      {amount ? (
        <div
          id="precipitation_amount"
          className="flex flex-row items-center justify-start"
        >
          <WiRaindrops className="size-14 lg:size-28" />
          <span className="lg:text-5xl -m-4">
            {amount.toFixed(1)} <span className="text-[0.5em]">mm</span>
          </span>
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
}

const Temperature: FC<TemperatureProps> = ({ temperature }) => {
  return (
    <div className="flex flex-row justify-center">
      {temperature ? (
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
              href="/charts/temperature"
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
