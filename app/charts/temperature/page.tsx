"use client";

import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { useContext } from "react";
import {
  getTemperatureForecastTimeSeries,
  getMinimumAndMaximumValue,
} from "@/app/lib/forecast/process";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

export default function Page() {
  const context = useContext(WeatherForecastContext);

  if (!context) throw new Error("Context cannot be undefined.");

  const data = getTemperatureForecastTimeSeries(context);
  const edges = getMinimumAndMaximumValue(data);

  return (
    <div className="flex flex-col mx-auto items-center mt-36">
      <h3 className="sm:text-2xl md:text-4xl lg:text-5xl">
        Temperature forecast
      </h3>
      <ResponsiveContainer height={500} width="100%" className="mt-10">
        <LineChart
          width={600}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <ReferenceLine y={0} />
          <XAxis dataKey="time" />
          <YAxis
            domain={[edges.min - 1, edges.max + 1]}
            label={{ value: "°C", position: "outsideLeft" }}
            type="number"
          />
          <Tooltip
            itemStyle={{ color: "#000000" }}
            contentStyle={{ backgroundColor: "#64748B", border: "0" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            dot={false}
            stroke="#14B8A6"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
