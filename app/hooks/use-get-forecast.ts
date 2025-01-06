import { getUserLocation } from "@/app/lib/location/location";
import { getForecastData } from "@/app/lib/met-api/api";
import type { MetJsonForecast } from "@/app/lib/met-api/declarations";
import { useEffect, useState } from "react";

const useGetForecast = () => {
	const [forecast, setForecast] = useState<MetJsonForecast | undefined>(
		undefined,
	);

	useEffect(() => {
		async function getForecast() {
			const location = await getUserLocation();

			if (location) {
				const forecast = await getForecastData({ ...location });

				if (!Object.prototype.hasOwnProperty.call(forecast, "error")) {
					setForecast(forecast as MetJsonForecast);
				}
			}
		}

		getForecast();
	}, []);

	return forecast;
};

export default useGetForecast;
