import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WeatherForecastProvider } from "@/app/contexts/weather-data-context";
import Header from "@/app/ui/header/header";
import HeaderForecastSummaryIcon from "@/app/ui/images/header-forecast-summary-image";

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
				className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto my-auto mt-4 relative`}
			>
				<Header />
				<WeatherForecastProvider>
					<HeaderForecastSummaryIcon />
					{children}
				</WeatherForecastProvider>
			</body>
		</html>
	);
}
