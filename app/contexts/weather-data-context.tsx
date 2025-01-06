"use client";

import useGetForecast from "@/app/hooks/use-get-forecast";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { MetJsonForecast } from "../lib/met-api/declarations";
import LoadingSpinner from "@/app/ui/loading-spinner";

export const WeatherForecastContext = createContext<
  MetJsonForecast | undefined
>(undefined);

export const WeatherForecastProvider = ({
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
