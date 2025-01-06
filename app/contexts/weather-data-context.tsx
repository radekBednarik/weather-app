"use client";

import useGetForecast from "@/app/hooks/use-get-forecast";
import React, { createContext, ReactNode } from "react";
export const WeatherForecastContext = createContext({});

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
    <WeatherForecastContext.Provider value={{}}>
      {children}
    </WeatherForecastContext.Provider>
  );
};
