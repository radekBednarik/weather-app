import { getMinimumAndMaximumValue } from "@/app/lib/forecast/process";
import type { FC } from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface CustomBarChartProps {
	heading: string;
	data: Record<string, string>[];
	dataName: string;
	units: string;
	refLineYVal?: number;
	refLineXVal?: string;
}

const CustomBarChart: FC<CustomBarChartProps> = ({
	heading,
	data,
	dataName,
	units,
	refLineYVal,
	refLineXVal,
}) => {
	const edges = getMinimumAndMaximumValue(data);
	return (
		<div className="flex flex-col mx-auto items-center mt-36">
			<h3 className="sm:text-2xl md:text-4xl lg:text-5xl">{heading}</h3>
			<ResponsiveContainer height={500} width="100%" className="mt-10">
				<BarChart
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
					<CartesianGrid
						horizontal={false}
						fillOpacity={0.3}
						fill="#64748B"
						strokeDasharray="3 3"
					/>
					<ReferenceLine
						y={typeof refLineYVal !== "undefined" ? refLineYVal : undefined}
					/>
					<ReferenceLine x={refLineXVal} stroke="magenta" />
					<XAxis dataKey="time" />
					<YAxis
						domain={[edges.min, edges.max + 1]}
						label={{ value: units, position: "outsideLeft" }}
						type="number"
					/>
					<Tooltip
						itemStyle={{ color: "#000000" }}
						contentStyle={{ backgroundColor: "#64748B", border: "0" }}
					/>
					<Legend payload={[{ value: dataName, type: "line", id: "ID01" }]} />
					<Bar dataKey="value" fill="#14B8A6" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CustomBarChart;
