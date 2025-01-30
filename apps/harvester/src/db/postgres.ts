import type {
	ForecastTimeStep,
	PointGeometry,
} from "@/met-api/declarations.js";
import { sql } from "@vercel/postgres";

async function upsertDataCoordinates(data: PointGeometry) {
	await sql`
    INSERT INTO coordinates (id, data)
    VALUES (1, ${JSON.stringify(data.coordinates)})
    ON CONFLICT (id)
    DO UPDATE SET data = ${JSON.stringify(data.coordinates)}
  `;
}

async function upsertDataTimeseries(data: ForecastTimeStep[]) {
	await sql`
    INSERT INTO timeseries (id, data)
    VALUES (1, ${JSON.stringify(data)})
    ON CONFLICT (id)
    DO UPDATE SET data = ${JSON.stringify(data)}
  `;
}

export async function upsertDataTables(
	coordinates: PointGeometry,
	forecastTimeSteps: ForecastTimeStep[],
) {
	await Promise.all([
		upsertDataCoordinates(coordinates),
		upsertDataTimeseries(forecastTimeSteps),
	]);
}

export async function createTables() {
	await sql`CREATE TABLE IF NOT EXISTS coordinates (
      id SERIAL PRIMARY KEY,
      data JSON
    );`;

	await sql`CREATE TABLE IF NOT EXISTS timeseries (
      id SERIAL PRIMARY KEY,
      data JSON
    );`;
}
