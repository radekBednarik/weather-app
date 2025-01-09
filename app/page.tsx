"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import GeolocationInfobox from "@/app/ui/geolocation/geolocation-infobox";
import { useContext, useState } from "react";
import type { FC } from "react";
import WeatherForecastList from "./ui/weather/weather-forecast-list";

export default function Home() {
	const context = useContext(WeatherForecastContext);
	// for now just throw
	if (typeof context === "undefined")
		throw new Error("Return context cannot be undefined.");

	const startIndex = 0;
	const endIndex = context.properties.timeseries.length - 1;

	const [currentIndex, setCurrentIndex] = useState(0);

	const totalPages = Math.ceil(endIndex / 4);

	console.log(startIndex, endIndex, currentIndex, totalPages);

	return (
		<main className="flex flex-col mt-10">
			<GeolocationInfobox />
			<WeatherForecastList
				itemsIndexStart={startIndex}
				itemsIndexEnd={endIndex}
			/>
			<Pagination startIndex={startIndex} endIndex={endIndex} />
		</main>
	);
}

interface PaginationProps {
	startIndex: number;
	endIndex: number;
}

const Pagination: FC<PaginationProps> = ({ startIndex, endIndex }) => {
	return (
		<div
			id="pagination"
			className="flex flex-row items-center justify-center mt-10"
		>
			<PaginationButton value={startIndex + 1} />

			<PaginationButton value={endIndex} />
		</div>
	);
};

interface PaginationButtonProps {
	value: number;
}
const PaginationButton: FC<PaginationButtonProps> = ({ value }) => {
	return <button className="">{value}</button>;
};

// for next day:

// export default function Home() {
//   const context = useContext(WeatherForecastContext);
//   if (typeof context === "undefined") throw new Error("Return context cannot be undefined.");
//
//   const itemsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(0);
//
//   const totalPages = Math.ceil(context.properties.timeseries.length / itemsPerPage);
//
//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage);
//   };
//
//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, context.properties.timeseries.length);
//
//   return (
//     <main className="flex flex-col mt-10">
//       <GeolocationInfobox />
//       <WeatherForecastList itemsIndexStart={startIndex} itemsIndexEnd={endIndex} />
//       <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//     </main>
//   );
// }
//
// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (newPage: number) => void;
// }
//
// const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       onPageChange(currentPage - 1);
//     }
//   };
//
//   const handleNext = () => {
//     if (currentPage < totalPages - 1) {
//       onPageChange(currentPage + 1);
//     }
//   };
//
//   return (
//     <div id="pagination" className="flex flex-row items-center justify-center mt-10">
//       <button onClick={handlePrevious} disabled={currentPage === 0}>
//         Previous
//       </button>
//       <span className="mx-2">
//         Page {currentPage + 1} of {totalPages}
//       </span>
//       <button onClick={handleNext} disabled={currentPage === totalPages - 1}>
//         Next
//       </button>
//     </div>
//   );
// };
// ```
//
// In this example:
// - The `Home` component manages the `currentPage` state and calculates the `startIndex` and `endIndex` for the items to be displayed.
// - The `Pagination` component receives the `currentPage`, `totalPages`, and `onPageChange` handler as props.
// - The `Pagination` component has buttons for navigating to the previous and next pages, and it calls the `onPageChange` handler with the new page number when a button is clicked.
// - The `WeatherForecastList` component receives the `startIndex` and `endIndex` as props to display the correct items for the current page.
