export const dynamic = "force-static";
import { compareAsc } from "date-fns";

import type { GeolocationData } from "@/app/lib/location/location";
import { getForecastData } from "@/app/lib/met-api/api";
import { type NextRequest, NextResponse } from "next/server";

const cache = {
	data: {},
	expires: new Date().toUTCString(),
};

export async function POST(req: NextRequest) {
	const { latitude, longitude, altitude } =
		(await req.json()) as GeolocationData;

	const data = await getForecastData({ latitude, longitude, altitude });

	if (
		data.expires &&
		compareAsc(new Date(cache.expires), new Date(data.expires)) < 0
	) {
		cache.data = data.data;
		cache.expires = data.expires;
	}

	return NextResponse.json(cache.data);
}
