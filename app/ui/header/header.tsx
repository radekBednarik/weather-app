import Image from "next/image";
import weatherImage from "../../../public/weather-icons/clearsky_day.png";

export default function Header() {
	return (
		<header id="header" className="flex justify-between items-center">
			<Image
				src={weatherImage}
				alt="Stylized image of the big bright yellow sun."
			/>
			<div className="inline-flex flex-col">
				<h1 className="text-8xl">Weather Forecast</h1>
				<h2 className="text-5xl self-end">for your location</h2>
			</div>
		</header>
	);
}
