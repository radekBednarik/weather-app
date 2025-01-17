"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { getSpecificTimepointForecast } from "@/app/lib/forecast/process";
import { cn } from "@/app/lib/tailwind/utils";
import ForecastImage from "@/app/ui/images/forecast-image";
import Link from "next/link";
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
		<div
			id="forecast-summary-icon"
			className={cn(
				"absolute top-0 left-0 w-fit mobile-s:size-32 mobile-m:size-36 mobile-l:size-44",
				"sm:size-64 2xl:size-96",
			)}
		>
			<Link href="/" aria-label="Click the link to navigate to home page.">
				<ForecastImage
					icon={icon}
					alt={`For the next hour the weather should be ${iconName}`}
					width={240}
					height={240}
					className="animate-float"
				/>
			</Link>
		</div>
	);
};

export default HeaderForecastSummaryIcon;
