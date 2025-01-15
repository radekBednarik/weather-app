"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { useContext } from "react";
import { getTemperatureForecastTimeSeries } from "@/app/lib/forecast/process";
import CustomLineChart from "@/app/ui/charts/line-chart";

export default function Page() {
  const context = useContext(WeatherForecastContext);

  if (!context) throw new Error("Context cannot be undefined.");

  const data = getTemperatureForecastTimeSeries(context);

  return (
    <>
      <CustomLineChart
        heading="Temperature forecast"
        data={data}
        units="°C"
        refLineYVal={0}
      />
    </>
  );
}
