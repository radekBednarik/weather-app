"use client";

import useGetForecast from "@/app/hooks/use-get-forecast";
import React, { createContext, ReactNode, Suspense } from "react";
export const WeatherForecastContext = createContext({});

export const WeatherForecastProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const weatherData = useGetForecast();

  if (weatherData) {
    return (
      <Suspense fallback="Loading data...">
        <WeatherForecastContext.Provider value={weatherData}>
          {children}
        </WeatherForecastContext.Provider>
      </Suspense>
    );
  }

  return (
    <Suspense fallback="Loading data...">
      <WeatherForecastContext.Provider value={{}}>
        {children}
      </WeatherForecastContext.Provider>
    </Suspense>
  );
};
