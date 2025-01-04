"use client";

import { getSpecificTimepointForecast } from "@/app/lib/forecast/process";
import { getForecastFromSessionStorage } from "@/app/lib/storages/browser-storage";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import defaultWeatherImage from "../../../public/weather-icons/clearsky_day.png";
import GeolocationInfobox from "../geolocation/geolocation-infobox";

export default function Header() {
	return (
		<header id="header" className="flex flex-col">
			<Link href="/">
				<div className="flex justify-between items-center">
					<NextOneHourSummaryIcon />
					<div className="inline-flex flex-col">
						<h1 className="text-8xl">Weather Forecast</h1>
						<h2 className="text-5xl self-end">for your location</h2>
					</div>
				</div>
				<div className="flex flex-row justify-end">
					<GeolocationInfobox />
				</div>
			</Link>
		</header>
	);
}

function NextOneHourSummaryIcon() {
	const [icon, setIcon] = useState<StaticImageData | string>(
		defaultWeatherImage,
	);
	const [iconName, setIconName] = useState("");

	useEffect(() => {
		const forecast = getForecastFromSessionStorage();

		if (forecast) {
			const forecastStep = getSpecificTimepointForecast(
				forecast,
				new Date().toISOString(),
			);

			const iconName = forecastStep?.data.next_1_hours?.summary.symbol_code;

			if (iconName) {
				const path = `/weather-icons/${iconName}.png`;
				setIcon(path);
				setIconName(iconName);
			}
		}
	}, []);

	return (
		<Image
			src={icon}
			width={240}
			height={240}
			alt={`Weather for the next hour should be ${iconName.length > 0 ? iconName : "big bright yellow sun"}. However, if it was not possible to resolve, the default picture is the big bright yellow sun.`}
		/>
	);
}
