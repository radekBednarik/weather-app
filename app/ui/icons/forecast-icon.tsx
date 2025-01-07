import Image, { type StaticImageData } from "next/image";
import type { FC } from "react";

interface ForecastIconProps {
	icon: string | StaticImageData;
	alt: string;
	width: number;
	height: number;
}

const ForecastIcon: FC<ForecastIconProps> = ({ icon, alt, width, height }) => {
	return (
		<div id="forecast-icon">
			<Image src={icon} width={width} height={height} alt={alt} />
		</div>
	);
};

export default ForecastIcon;
