"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import GeolocationInfobox from "@/app/ui/geolocation/geolocation-infobox";
import WeatherForecastList from "@/app/ui/weather/weather-forecast-list";
import Link from "next/link";
import { type FC, use, useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const itemsPerPage = 4;

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
			<Pagination currentPage={page} />
		</main>
	);
}

interface PaginationProps {
	currentPage: number;
}

const Pagination: FC<PaginationProps> = ({ currentPage }) => {
	const prevPage = currentPage > 1 ? currentPage - 1 : 1;
	const nextpage = currentPage + 1;

	return (
		<div id="pagination" className="flex flex-row items-center justify-around">
			<Link href={`/?page=${prevPage}`}>
				<FaArrowLeft className="md:text-5xl" />
			</Link>
			<div className="border rounded-lg  p-2 md:text-4xl">{currentPage}</div>
			<Link href={`/?page=${nextpage}`}>
				<FaArrowRight className="md:text-5xl" />
			</Link>
		</div>
	);
};
