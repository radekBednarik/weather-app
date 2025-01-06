"use client";

import useGetForecast from "@/app/hooks/use-get-forecast";
import React, { createContext, ReactNode } from "react";
import { MetJsonForecast } from "../lib/met-api/declarations";

export const WeatherForecastContext = createContext<
  MetJsonForecast | undefined
>(undefined);

export const WeatherForecastProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const weatherData = useGetForecast();

  if (weatherData) {
    return (
      <WeatherForecastContext.Provider value={weatherData}>
        {children}
      </WeatherForecastContext.Provider>
    );
  }

  return (
    <WeatherForecastContext.Provider value={undefined}>
      {children}
    </WeatherForecastContext.Provider>
  );
};
