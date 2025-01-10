"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import GeolocationInfobox from "@/app/ui/geolocation/geolocation-infobox";
import WeatherForecastList from "@/app/ui/weather/weather-forecast-list";
import Link from "next/link";
import { type FC, use, useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { MetJsonForecast } from "./lib/met-api/declarations";

const itemsPerPage = 6;

export default function Home({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	const p = use(searchParams).page;
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

interface PaginationProps {
	context: MetJsonForecast;
	currentPage: number;
	itemsPerPage: number;
}

const Pagination: FC<PaginationProps> = ({
	currentPage,
	context,
	itemsPerPage,
}) => {
	const maxPages = Math.ceil(
		context.properties.timeseries.length / itemsPerPage,
	);
	const prevPage = currentPage > 1 ? currentPage - 1 : 1;
	const nextpage = currentPage < maxPages ? currentPage + 1 : currentPage;

	return (
		<div
			id="pagination"
			className="flex flex-row items-center justify-around my-10"
		>
			<Link href={`/?page=${prevPage}`} className="hover:text-blue-500">
				<FaArrowLeft className="md:text-5xl" />
			</Link>

			<div className="border rounded-lg p-2 md:text-4xl">{currentPage}</div>
			<Link href={`/?page=${nextpage}`} className="hover:text-blue-500">
				<FaArrowRight className="md:text-5xl" />
			</Link>
		</div>
	);
};
