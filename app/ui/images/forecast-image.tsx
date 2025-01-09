import Image, { type StaticImageData } from "next/image";
import type { FC } from "react";

interface ForecastImageProps {
	icon: string | StaticImageData;
	alt: string;
	width: number;
	height: number;
	className?: string;
	sizes?: string;
}

const ForecastImage: FC<ForecastImageProps> = ({
	icon,
	alt,
	width,
	height,
	className,
	sizes,
}) => {
	return (
		<div id="forecast-icon">
			<Image
				src={icon}
				width={width}
				height={height}
				alt={alt}
				layout="responsive"
				className={className}
				sizes={sizes}
			/>
		</div>
	);
};

export default ForecastImage;
