"use client";

import {
	type GeolocationData,
	getUserLocation,
} from "@/app/lib/location/location";
import type { ApiError } from "@/app/lib/met-api/api";
import type { MetJsonForecast } from "@/app/lib/met-api/declarations";
import { useEffect, useState } from "react";

const useGetForecast = () => {
	const [forecast, setForecast] = useState<MetJsonForecast | undefined>(
		undefined,
	);

	useEffect(() => {
		async function getForecastHandler() {
			const location = await getUserLocation();

			if (location) {
				const forecast = await getForecast({ ...location });

				if (
					forecast &&
					!Object.prototype.hasOwnProperty.call(forecast, "error")
				) {
					setForecast(forecast as MetJsonForecast);
				}
			}
		}

		getForecastHandler();
	}, []);

	return forecast;
};

export default useGetForecast;

function getForecast(location: GeolocationData) {
	const data = fetch("/api/use-geolocation", {
		headers: { "Content-Type": "application/json" },
		method: "POST",
		body: JSON.stringify(location),
	})
		.then((response) => response.json())
		.then((data: MetJsonForecast | ApiError | undefined) => data);
	return data;
}
