import { compareAsc } from "date-fns";

import type { GeolocationData } from "@/app/lib/location/location";
import { getForecastData } from "@/app/lib/met-api/api";
import { type NextRequest, NextResponse } from "next/server";

const cache = {
	data: {},
	expires: "",
};

export async function POST(req: NextRequest) {
	const { latitude, longitude, altitude } =
		(await req.json()) as GeolocationData;

	if (
		cache.expires === "" ||
		(cache.expires.length > 0 &&
			compareAsc(new Date(cache.expires), new Date()) < 0)
	) {
		const data = await getForecastData({ latitude, longitude, altitude });

		cache.data = data.data ? data.data : {};
		cache.expires = data.expires ? data.expires : "";
	}

	return NextResponse.json(cache.data);
}
