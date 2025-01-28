import { FC } from "react";
import { robotoCondensedSemiBold } from "@/app/ui/fonts/fonts";
import { cn } from "@/app/lib/tailwind/utils";

interface ForecastPointDateProps {
  date: string;
}

const ForecastPointDate: FC<ForecastPointDateProps> = ({ date }) => {
  return (
    <div
      id={`forecast-point-date-${date}`}
      className={cn(
        "flex flex-row justify-center items-center lg:text-5xl my-10 text-teal-500",
        `${robotoCondensedSemiBold.className}`,
      )}
    >
      - {date} -
    </div>
  );
};

export default ForecastPointDate;
