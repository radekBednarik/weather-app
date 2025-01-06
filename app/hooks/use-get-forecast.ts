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

				if (!Object.prototype.hasOwnProperty.call(forecast, "error")) {
					setForecast(forecast as MetJsonForecast);
				}
			}
		}

		getForecastHandler();
	}, []);

	return forecast;
};

export default useGetForecast;

async function getForecast(location: GeolocationData) {
	const data = (await fetch("/api/use-geolocation", {
		headers: { "Content-Type": "application/json" },
		method: "POST",
		body: JSON.stringify(location),
	})) as unknown as MetJsonForecast | ApiError;

	return data;
}
