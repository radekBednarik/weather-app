import type { GeolocationData } from "@/app/lib/location/location";
import { getForecastData } from "@/app/lib/met-api/api";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { latitude, longitude, altitude } =
		(await req.json()) as GeolocationData;

	const data = await getForecastData({ latitude, longitude, altitude });

	return NextResponse.json(data);
}
