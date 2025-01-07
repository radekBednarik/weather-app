import { compareAsc } from "date-fns";

import type { GeolocationData } from "@/app/lib/location/location";
import { type ApiError, getForecastData } from "@/app/lib/met-api/api";
import type { MetJsonForecast } from "@/app/lib/met-api/declarations";
import { type NextRequest, NextResponse } from "next/server";

interface Cache {
	data?: MetJsonForecast | ApiError;
	expires?: string;
}

const cache: Cache = {
	data: undefined,
	expires: undefined,
};

export async function POST(req: NextRequest) {
	const { latitude, longitude, altitude } =
		(await req.json()) as GeolocationData;

	if (
		typeof cache.expires === "undefined" ||
		(cache.expires && compareAsc(new Date(cache.expires), new Date()) < 0)
	) {
		const data = await getForecastData({ latitude, longitude, altitude });

		cache.data = data.data;
		cache.expires = data.expires;
	}

	return NextResponse.json(cache.data);
}
