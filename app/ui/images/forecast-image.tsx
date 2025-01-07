import Image, { type StaticImageData } from "next/image";
import type { FC } from "react";

interface ForecastImageProps {
	icon: string | StaticImageData;
	alt: string;
	width: number;
	height: number;
}

const ForecastImage: FC<ForecastImageProps> = ({
	icon,
	alt,
	width,
	height,
}) => {
	return (
		<div id="forecast-icon">
			<Image src={icon} width={width} height={height} alt={alt} />
		</div>
	);
};

export default ForecastImage;
