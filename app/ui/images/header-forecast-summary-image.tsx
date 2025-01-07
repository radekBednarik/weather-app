"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { getSpecificTimepointForecast } from "@/app/lib/forecast/process";
import ForecastImage from "@/app/ui/images/forecast-image";
import { useContext } from "react";
import defaultIcon from "../../../public/weather-icons/clearsky_day.png";

const HeaderForecastSummaryIcon = () => {
	const context = useContext(WeatherForecastContext);

	if (!context) throw new Error("Context cannot be undefined.");

	const timepoint = getSpecificTimepointForecast(
		context,
		new Date().toISOString(),
	);
	const iconName = timepoint?.data.next_1_hours?.summary.symbol_code;
	const icon = iconName ? `/weather-icons/${iconName}.png` : defaultIcon;

	return (
		<div id="forecast-summary-icon" className="absolute top-0 left-0">
			<ForecastImage
				icon={icon}
				alt={`For the next hour the weather should be ${iconName}`}
				width={160}
				height={160}
			/>
		</div>
	);
};

export default HeaderForecastSummaryIcon;
