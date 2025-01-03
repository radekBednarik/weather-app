import Image from "next/image";

export default function Header() {
	return (
		<header id="header" className="flex justify-end h-screen">
			<div className="inline-flex flex-col ">
				<h1 className="text-8xl">Weather Forecast</h1>
				<h2 className="text-5xl self-end">for your location</h2>
			</div>
		</header>
	);
}
