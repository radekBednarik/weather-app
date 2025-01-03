/**
 * This module handles getting geolocation of the user (browser).
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
 */

interface GeolocationData {
	latitude: number;
	longitude: number;
	altitude: number | null;
}

export type UserGeolocation = GeolocationData | undefined;

export function getUserLocation() {
	let data: UserGeolocation;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			(location) => {
				data = {
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
					altitude: location.coords.altitude,
				};
			},
			() => {
				data = undefined;
			},
		);
	}

	return data;
}
