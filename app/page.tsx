"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import GeolocationInfobox from "@/app/ui/geolocation/geolocation-infobox";
import Pagination from "@/app/ui/pagination/pagination";
import WeatherForecastList from "@/app/ui/weather/weather-forecast-list";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";

const itemsPerPage = 5;

export default function Page() {
	const query = useSearchParams();
	const p = query.get("page");
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
