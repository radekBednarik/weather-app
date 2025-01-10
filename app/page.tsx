"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import GeolocationInfobox from "@/app/ui/geolocation/geolocation-infobox";
import Pagination from "@/app/ui/pagination/pagination";
import WeatherForecastList from "@/app/ui/weather/weather-forecast-list";
import { use, useContext } from "react";

const itemsPerPage = 5;

export default function Page({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	const query = use(searchParams);
	const p = query.page;
	console.log("P :", p);
	const page = Number.parseInt(p ? p : "1");
	const startIndex = itemsPerPage * (page - 1);
	const endIndex = startIndex + itemsPerPage;

	const context = useContext(WeatherForecastContext);

	if (!context) throw new Error("Context cannot be undefined.");

	return (
		<main className="flex flex-col mt-10">
			<GeolocationInfobox />
			<WeatherForecastList
				itemsIndexStart={startIndex}
				itemsIndexEnd={endIndex}
			/>
			<Pagination
				currentPage={page}
				context={context}
				itemsPerPage={itemsPerPage}
			/>
		</main>
	);
}
