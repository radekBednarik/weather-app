import { getMinimumAndMaximumValue } from "@/app/lib/forecast/process";
import type { FC } from "react";
import {
	Legend,
	Line,
	LineChart,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface CustomLineChartProps {
	heading: string;
	data: Record<string, string>[];
	dataName: string;
	units: string;
	refLineYVal?: number;
	refLineXVal?: string;
}

const CustomLineChart: FC<CustomLineChartProps> = ({
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
					<ReferenceLine
						y={typeof refLineYVal !== "undefined" ? refLineYVal : undefined}
					/>
					<ReferenceLine x={refLineXVal} stroke="magenta" />
					<XAxis dataKey="time" />
					<YAxis
						domain={[edges.min, edges.max]}
						label={{ value: units, position: "outsideLeft" }}
						type="number"
					/>
					<Tooltip
						itemStyle={{ color: "#000000" }}
						contentStyle={{ backgroundColor: "#64748B", border: "0" }}
					/>
					<Legend payload={[{ value: dataName, type: "line", id: "ID01" }]} />
					<Line type="monotone" dataKey="value" dot={false} stroke="#14B8A6" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CustomLineChart;
