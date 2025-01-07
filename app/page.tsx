"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import GeolocationInfobox from "@/app/ui/geolocation/geolocation-infobox";
import { useContext } from "react";

export default function Home() {
	const context = useContext(WeatherForecastContext);

	// for now just throw
	if (typeof context === "undefined")
		throw new Error("Return context cannot be undefined.");

	return (
		<main className="flex flex-col mt-10">
			<GeolocationInfobox />
		</main>
	);
}
