"use client";

import {
	type UserGeolocation,
	getUserLocation,
} from "@/app/lib/location/location";
import { useEffect, useState } from "react";

const GeolocationInfobox = () => {
	const [location, setLocation] = useState<UserGeolocation>(undefined);

	useEffect(() => {
		async function fetchLoc() {
			setLocation(await getUserLocation());
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
