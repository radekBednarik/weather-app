import { getForecastData } from "@/met-api/api.js";
import "dotenv/config";

async function main() {
	const forecastData = await getForecastData({
		latitude: 50.1383168,
		longitude: 15.1191552,
		altitude: null,
	});

	console.log(JSON.stringify(forecastData));
}

(async () => {
	await main();
})();
