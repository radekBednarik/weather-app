import Link from "next/link";

export default function Header() {
	return (
		<header id="header" className="flex flex-col">
			<Link href="/">
				<div className="flex justify-end items-center">
					<div className="inline-flex flex-col">
						<h1 className="sm: text-4xl md:text-6xl lg:text-8xl">
							Weather Forecast
						</h1>
						<h2 className="sm: text-2xl md:text-4xl lg:text-5xl self-end">
							for your location
						</h2>
					</div>
				</div>
			</Link>
		</header>
	);
}
