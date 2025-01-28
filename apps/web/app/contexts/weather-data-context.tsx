"use client";

import useGetForecast from "@/app/hooks/use-get-forecast";
import type { MetJsonForecast } from "@/app/lib/met-api/declarations";
import LoadingSpinner from "@/app/ui/loading-spinner";
import React, {
	createContext,
	type ReactNode,
	useEffect,
	useState,
} from "react";

export const WeatherForecastContext = createContext<
	MetJsonForecast | undefined
>(undefined);

const WeatherForecastProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [loading, setLoading] = useState(true);
	const weatherData = useGetForecast();

	useEffect(() => {
		if (weatherData) {
			setLoading(false);
		}
	}, [weatherData]);

	if (loading) {
		return (
			<div>
				<LoadingSpinner />
			</div>
		);
	}

	return (
		<WeatherForecastContext.Provider value={weatherData}>
			{children}
		</WeatherForecastContext.Provider>
	);
};

export default WeatherForecastProvider;
