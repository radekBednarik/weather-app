import type { MetJsonForecast } from "@/app/lib/met-api/declarations";
import Link from "next/link";
import type { FC } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

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

export default Pagination;
