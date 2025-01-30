import { createTables, upsertDataTables } from "@/db/postgres.js";
import { getForecastData } from "@/met-api/api.js";
import "dotenv/config";

async function main() {
	const forecastData = await getForecastData({
		latitude: 50.1383168,
		longitude: 15.1191552,
		altitude: null,
	});
	const pointGeometry = forecastData.data?.geometry;
	const timeseries = forecastData.data?.properties.timeseries;

	if (!pointGeometry || !timeseries) {
		throw new Error("Failed to get needed data from MET API.");
	}

	await createTables();
	await upsertDataTables(pointGeometry, timeseries);
}

(async () => {
	await main();
})();
