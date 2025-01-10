"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import GeolocationInfobox from "@/app/ui/geolocation/geolocation-infobox";
import WeatherForecastList from "@/app/ui/weather/weather-forecast-list";
import { use, useContext } from "react";

const itemsPerPage = 4;

export default function Home({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	const context = useContext(WeatherForecastContext);
	// for now just throw
	if (typeof context === "undefined")
		throw new Error("Return context cannot be undefined.");

	const p = use(searchParams).page;
	const page = Number.parseInt(p ? p : "1") - 1;
	const startIndex = page === 0 ? page : itemsPerPage * page;
	const endIndex = startIndex + itemsPerPage;

	return (
		<main className="flex flex-col mt-10">
			<GeolocationInfobox />
			<WeatherForecastList
				itemsIndexStart={startIndex}
				itemsIndexEnd={endIndex}
			/>
		</main>
	);
}
