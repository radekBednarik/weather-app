import type {
	GeolocationData,
	UserGeolocation,
} from "@/app/lib/location/location";
import type { MetJsonForecast } from "../met-api/declarations";

export function saveGeolocationToSessionStorage(data: UserGeolocation) {
	window.sessionStorage.setItem("user_geolocation_data", JSON.stringify(data));
}

export function getGeolocationDataFromSessionStorage():
	| GeolocationData
	| undefined {
	const raw = window.sessionStorage.getItem("user_geolocation_data");

	if (raw !== null) {
		return JSON.parse(raw) as GeolocationData;
	}

	return undefined;
}

export function saveForecastToSessionStorage(data: MetJsonForecast) {
	window.sessionStorage.setItem("forecast_data", JSON.stringify(data));
}

export function getForecastFromSessionStorage() {
	const raw = window.sessionStorage.getItem("forecast_data");

	if (raw !== null) {
		return JSON.parse(raw) as MetJsonForecast;
	}

	return undefined;
}
