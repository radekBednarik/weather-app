import Image from "next/image";
import defaultIcon from "../../public/weather-icons/clearsky_day.png";

const ForecastIcon = () => {
	return (
		<div id="forecast-icon" className="absolute top-1 left-0">
			<Image
				src={defaultIcon}
				width={160}
				height={160}
				alt="Image forecast summary icon."
			/>
		</div>
	);
};

export default ForecastIcon;
