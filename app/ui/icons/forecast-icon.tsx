import Image, { type StaticImageData } from "next/image";
import type { FC } from "react";

interface ForecastIconProps {
	icon: string | StaticImageData;
	alt: string;
}

const ForecastIcon: FC<ForecastIconProps> = ({ icon, alt }) => {
	return (
		<div id="forecast-icon">
			<Image src={icon} width={160} height={160} alt={alt} />
		</div>
	);
};

export default ForecastIcon;
