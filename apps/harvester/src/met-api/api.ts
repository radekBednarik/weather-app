/**
 * This module handles calling METNO API which return
 * JSON formatted data about weather forecast.
 * @see https://api.met.no/weatherapi/locationforecast/2.0/documentation
 */

import type { MetJsonForecast } from "@/met-api/declarations.js";
import { add } from "date-fns";

export interface ApiError {
	error: {
		message?: string;
		status_code?: number;
		error?: Error;
	};
}

export async function getForecastData({
	latitude,
	longitude,
	altitude,
}: { latitude: number; longitude: number; altitude: number | null }) {
	const url = new URL(
		"/weatherapi/locationforecast/2.0/complete",
		"https://api.met.no",
	);

	url.searchParams.set("lat", latitude.toString());
	url.searchParams.set("lon", longitude.toString());

	if (altitude) {
		url.searchParams.set("altitude", altitude.toString());
	}

	const fullUrl = url.toString();

	try {
		const response = await fetch(fullUrl, {
			headers: {
				"User-Agent": "Personal web forecast application for fun.",
				"Content-Type": "application/json;charset=UTF-8",
			},
		});

		const headerExpires =
			response.headers.get("expires") ||
			add(new Date(), { hours: 1 }).toUTCString();

		if (response.ok) {
			const json = (await response.json()) as MetJsonForecast;
			return { data: json, expires: headerExpires };
		}

		return {
			error: {
				message: response.statusText,
				status_code: response.status,
			},
		} satisfies ApiError;
	} catch (error) {
		const _error = error as Error;

		return {
			error: {
				message: "fetch getForecastData failed.",
				error: _error,
			},
		} satisfies ApiError;
	}
}
