import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { getLocationFromForecast } from "@/app/lib/forecast/process";
import { useContext } from "react";

const GeolocationInfobox = () => {
	const data = useContext(WeatherForecastContext);

	if (typeof data === "undefined")
		throw new Error("Context data cannot be undefined.");

	const geo = getLocationFromForecast(data);

	return (
		<div id="geolocation-infobox" className="inline-flex flex-col">
			<div id="longitude" className="self-end">
				<span className="font-semibold">Longitude: </span>
				{geo[0]}
			</div>
			<div id="latitude" className="self-end">
				<span className="font-semibold">Latitude: </span>
				{geo[1]}
			</div>
			{geo[2] ? (
				<div className="self-end">
					<span className="font-semibold">Altitude: </span>
					{geo[2]}
				</div>
			) : undefined}
		</div>
	);
};

export default GeolocationInfobox;
