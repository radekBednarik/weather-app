import Image from "next/image";
import Link from "next/link";
import ghLogo from "../../../public/logos/github-mark-white.png";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="flex mobile-s:flex-col mobile-m:flex-row items-center justify-end gap-4 my-4"
		>
			<div id="met-api">
				Data provided by{" "}
				<Link
					href="https://api.met.no/weatherapi/locationforecast/2.0/documentation"
					target="_blank"
					aria-label="External link to MET Weather API website."
					className="underline"
				>
					MET Weather API
				</Link>
			</div>
			<div className="mobile-s:hidden mobile-m:block mx-2">|</div>
			<div id="github-repo-link">
				<Link
					href="https://github.com/radekBednarik/weather-app"
					aria-label="External link to this site code repository."
					target="_blank"
				>
					<Image src={ghLogo} height={20} width={20} alt="Github logo." />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
