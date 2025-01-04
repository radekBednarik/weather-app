"use client";

import {
	type UserGeolocation,
	getUserLocation,
} from "@/app/lib/location/location";
import type { MetJsonForecast } from "@/app/lib/met-api/declarations";
import {
	getGeolocationDataFromSessionStorage,
	saveForecastToSessionStorage,
	saveGeolocationToSessionStorage,
} from "@/app/lib/storages/browser-storage";
import { useEffect, useState } from "react";

const GeolocationInfobox = () => {
	const [location, setLocation] = useState<UserGeolocation>(undefined);

	useEffect(() => {
		async function fetchLoc() {
			const geoData = getGeolocationDataFromSessionStorage();

			if (!geoData) {
				const location = await getUserLocation();
				setLocation(location);
				saveGeolocationToSessionStorage(location);
				postGeodataAndStoreForecast(location);
			} else {
				setLocation(geoData);
				postGeodataAndStoreForecast(geoData);
			}
		}

		fetchLoc();
	}, []);

	return (
		<main id="geolocation-infobox">
			{!location ? (
				<p>Getting location...</p>
			) : (
				<div className="flex flex-col">
					<p className="self-end">
						<span className="font-semibold">Latitude: </span>
						{location.latitude}
					</p>
					<p className="self-end">
						<span className="font-semibold">Longitude: </span>
						{location.longitude}
					</p>
					{!location.altitude ? (
						""
					) : (
						<p className="self-end">Altitude: {location.altitude}</p>
					)}
				</div>
			)}
		</main>
	);
};

export default GeolocationInfobox;

function postGeodataAndStoreForecast(geoData: UserGeolocation) {
	fetch("/api/use-geolocation", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(geoData),
	})
		.then((response) => response.json())
		.then((data: MetJsonForecast) => saveForecastToSessionStorage(data));
}
