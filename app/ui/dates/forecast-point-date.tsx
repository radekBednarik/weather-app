import { FC } from "react";

interface ForecastPointDateProps {
  date: string;
}

const ForecastPointDate: FC<ForecastPointDateProps> = ({ date }) => {
  return (
    <div
      id={`forecast-point-date-${date}`}
      className="flex flex-row justify-center items-center lg:text-5xl"
    >
      {date}
    </div>
  );
};

export default ForecastPointDate;
