"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { getWindspeedForecastTimeSeries } from "@/app/lib/forecast/process";
import CustomLineChart from "@/app/ui/charts/line-chart";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";

export default function Page() {
	const context = useContext(WeatherForecastContext);

	if (!context) throw new Error("Context cannot be undefined.");

	const params = useSearchParams();
	const selectedTime = params.get("time");

	const data = getWindspeedForecastTimeSeries(context);

	return (
		<>
			<CustomLineChart
				heading="Windspeed forecast"
				data={data}
				dataName="wind speed"
				units="m/s"
				refLineXVal={selectedTime ? selectedTime : undefined}
			/>
		</>
	);
}
