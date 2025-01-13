import { FC } from "react";

interface ForecastPointDateProps {
  date: string;
}

const ForecastPointDate: FC<ForecastPointDateProps> = ({ date }) => {
  return (
    <div
      id={`forecast-point-date-${date}`}
      className="flex-1 justify-center items-center"
    >
      {date}
    </div>
  );
};

export default ForecastPointDate;
