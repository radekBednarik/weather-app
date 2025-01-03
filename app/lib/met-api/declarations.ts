/**
 * MET forecast data model is specified on the api website.
 * @see https://api.met.no/weatherapi/locationforecast/2.0/documentation#!/data/get_complete
 */

export interface MetJsonForecast {
	geometry: PointGeometry;
	properties: Forecast;
	type: "Feature";
}

export interface PointGeometry {
	coordinates: number[]; // [longitude, latitude, altitude]
	type: "Point";
}

export interface Forecast {
	meta: InlineModel;
	timeseries: ForecastTimeStep[];
}

export interface InlineModel {
	units: ForecastUnits;
	updated_at: string; // Update time for this forecast
}

export interface ForecastTimeStep {
	data: InlineModel0; // Forecast for a specific time
	time: string; // The time these forecast values are valid for. Timestamp in format YYYY-MM-DDThh:mm:ssZ (ISO 8601)
}

export interface ForecastUnits {
	air_pressure_at_sea_level?: string;
	air_temperature?: string;
	air_temperature_max?: string;
	air_temperature_min?: string;
	cloud_area_fraction?: string;
	cloud_area_fraction_high?: string;
	cloud_area_fraction_low?: string;
	cloud_area_fraction_medium?: string;
	dew_point_temperature?: string;
	fog_area_fraction?: string;
	precipitation_amount?: string;
	precipitation_amount_max?: string;
	precipitation_amount_min?: string;
	probability_of_precipitation?: string;
	probability_of_thunder?: string;
	relative_humidity?: string;
	ultraviolet_index_clear_sky_max?: string;
	wind_from_direction?: string;
	wind_speed?: string;
	wind_speed_of_gust?: string;
}

export interface InlineModel0 {
	instant: InlineModel1; // Parameters which applies to this exact point in time
	next_12_hours?: InlineModel2; // Parameters with validity times over twelve hours. Will not exist for all time steps.
	next_1_hours?: InlineModel3; // Parameters with validity times over one hour. Will not exist for all time steps.
	next_6_hours?: InlineModel4; // Parameters with validity times over six hours. Will not exist for all time steps.
}

export interface InlineModel1 {
	details?: ForecastTimeInstant;
}

export interface InlineModel2 {
	details: ForecastTimePeriod;
	summary: ForecastSummary;
}

export interface InlineModel3 {
	details: ForecastTimePeriod;
	summary: ForecastSummary;
}

export interface InlineModel4 {
	details: ForecastTimePeriod;
	summary: ForecastSummary;
}

export interface ForecastTimeInstant {
	air_pressure_at_sea_level?: number;
	air_temperature?: number;
	cloud_area_fraction?: number;
	cloud_area_fraction_high?: number;
	cloud_area_fraction_low?: number;
	cloud_areaa_fraction_medium?: number;
	dew_point_temperature?: number;
	fog_area_fraction?: number;
	relative_humidity?: number;
	wind_from_direction?: number; // in degrees clockwise from North
	wind_speed?: number;
	wind_speed_of_gust?: number;
}

export interface ForecastTimePeriod {
	air_temperature_max?: number;
	air_temperature_min?: number;
	precipitation_amount?: number;
	precipitation_amount_max?: number;
	precipitation_amount_min?: number;
	probability_of_precipitation?: number;
	probability_of_thunder?: number;
	ultraviolet_index_clear_sky_max?: number;
}

export interface ForecastSummary {
	symbol_code:
		| "clearsky_day"
		| "clearsky_night"
		| "clearsky_polartwilight"
		| "fair_day"
		| "fair_night"
		| "fair_polartwilight"
		| "lightssnowshowersandthunder_day"
		| "lightssnowshowersandthunder_night"
		| "lightssnowshowersandthunder_polartwilight"
		| "lightsnowshowers_day"
		| "lightsnowshowers_night"
		| "lightsnowshowers_polartwilight"
		| "heavyrainandthunder"
		| "heavysnowandthunder"
		| "rainandthunder"
		| "heavysleetshowersandthunder_day"
		| "heavysleetshowersandthunder_night"
		| "heavysleetshowersandthunder_polartwilight"
		| "heavysnow"
		| "heavyrainshowers_day"
		| "heavyrainshowers_night"
		| "heavyrainshowers_polartwilight"
		| "lightsleet"
		| "heavyrain"
		| "lightrainshowers_day"
		| "lightrainshowers_night"
		| "lightrainshowers_polartwilight"
		| "heavysleetshowers_day"
		| "heavysleetshowers_night"
		| "heavysleetshowers_polartwilight"
		| "lightsleetshowers_day"
		| "lightsleetshowers_night"
		| "lightsleetshowers_polartwilight"
		| "snow"
		| "heavyrainshowersandthunder_day"
		| "heavyrainshowersandthunder_night"
		| "heavyrainshowersandthunder_polartwilight"
		| "snowshowers_day"
		| "snowshowers_night"
		| "snowshowers_polartwilight"
		| "fog"
		| "snowshowersandthunder_day"
		| "snowshowersandthunder_night"
		| "snowshowersandthunder_polartwilight"
		| "lightsnowandthunder"
		| "heavysleetandthunder"
		| "lightrain"
		| "rainshowersandthunder_day"
		| "rainshowersandthunder_night"
		| "rainshowersandthunder_polartwilight"
		| "rain"
		| "lightsnow"
		| "lightrainshowersandthunder_day"
		| "lightrainshowersandthunder_night"
		| "lightrainshowersandthunder_polartwilight"
		| "heavysleet"
		| "sleetandthunder"
		| "lightrainandthunder"
		| "sleet"
		| "lightssleetshowersandthunder_day"
		| "lightssleetshowersandthunder_night"
		| "lightssleetshowersandthunder_polartwilight"
		| "lightsleetandthunder"
		| "partlycloudy_day"
		| "partlycloudy_night"
		| "partlycloudy_polartwilight"
		| "sleetshowersandthunder_day"
		| "sleetshowersandthunder_night"
		| "sleetshowersandthunder_polartwilight"
		| "rainshowers_day"
		| "rainshowers_night"
		| "rainshowers_polartwilight"
		| "snowandthunder"
		| "sleetshowers_day"
		| "sleetshowers_night"
		| "sleetshowers_polartwilight"
		| "cloudy"
		| "heavysnowshowersandthunder_day"
		| "heavysnowshowersandthunder_night"
		| "heavysnowshowersandthunder_polartwilight"
		| "heavysnowshowers_day"
		| "heavysnowshowers_night"
		| "heavysnowshowers_polartwilight";
}
