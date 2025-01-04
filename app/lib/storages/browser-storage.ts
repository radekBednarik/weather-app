import type { UserGeolocation } from "@/app/lib/location/location";

export function saveGeolocationToSessionStorage(data: UserGeolocation) {
	window.sessionStorage.setItem("user_geolocation_data", JSON.stringify(data));
}

export function getGeolocationDataFromSessionStorage():
	| UserGeolocation
	| undefined {
	const raw = window.sessionStorage.getItem("user_geolocation_data");

	if (raw !== null) {
		return JSON.parse(raw) as UserGeolocation;
	}

	return undefined;
}
