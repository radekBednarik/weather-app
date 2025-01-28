/**
 * This module handles getting geolocation of the user (browser).
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
 */

export interface GeolocationData {
	latitude: number;
	longitude: number;
	altitude: number | null;
}

export type UserGeolocation = GeolocationData | undefined;

export function getUserLocation(): Promise<UserGeolocation> {
	return new Promise((resolve) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(location) => {
					const data: GeolocationData = {
						latitude: location.coords.latitude,
						longitude: location.coords.longitude,
						altitude: location.coords.altitude,
					};
					resolve(data);
				},
				() => {
					resolve(undefined);
				},
			);
		} else {
			resolve(undefined);
		}
	});
}
