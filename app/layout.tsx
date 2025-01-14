import type { Metadata } from "next";
import "./globals.css";
import WeatherForecastProvider from "@/app/contexts/weather-data-context";
import Header from "@/app/ui/header/header";
import HeaderForecastSummaryIcon from "@/app/ui/images/header-forecast-summary-image";
import { roboto } from "@/app/ui/fonts/fonts";

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
        className={`${roboto.className} antialiased container mx-auto my-auto mt-4 relative`}
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
