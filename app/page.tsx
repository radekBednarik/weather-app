"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { useContext } from "react";

export default function Home() {
  const context = useContext(WeatherForecastContext);
  return <div>{JSON.stringify(context)}</div>;
}
