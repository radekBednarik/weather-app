import { Roboto, Roboto_Condensed } from "next/font/google";

export const roboto = Roboto({
	variable: "--font-roboto-sans",
	subsets: ["latin"],
	weight: "100",
});

export const robotoCondensedSemiBold = Roboto_Condensed({
	variable: "--font-roboto-condensed",
	subsets: ["latin"],
	weight: "300",
});
