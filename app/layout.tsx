import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WeatherForecastProvider } from "@/app/contexts/weather-data-context";
import ForecastIcon from "@/app/ui/forecast-icon";
import Header from "@/app/ui/header/header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Weather forecast",
	description: "Get weather forecast for your current location.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto my-auto mt-2 relative`}
			>
				<Header />
				<WeatherForecastProvider>
					<ForecastIcon />
					{children}
				</WeatherForecastProvider>
			</body>
		</html>
	);
}
