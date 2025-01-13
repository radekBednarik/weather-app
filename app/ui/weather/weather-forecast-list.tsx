import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { formatISOToHoursAndMinutes } from "@/app/lib/time/time";
import WeatherForecastListItem from "@/app/ui/weather/weather-forecast-list-item";
import { format } from "date-fns";
import { type FC, useContext } from "react";

interface WeatherForecastListProps {
  itemsIndexStart: number;
  itemsIndexEnd: number;
}

const WeatherForecastList: FC<WeatherForecastListProps> = ({
  itemsIndexStart,
  itemsIndexEnd,
}) => {
  const context = useContext(WeatherForecastContext);

  if (!context) throw new Error("Context cannot be undefined.");

  const points = context?.properties.timeseries.slice(
    itemsIndexStart,
    itemsIndexEnd,
  );

  const uniqueDates: string[] = [];

  points.forEach((point, i, arr) => {
    const pointDate = formatIsoToDate(point.time);

    if (i === 0) {
      uniqueDates.push(pointDate);
    }

    if (i > 0 && pointDate !== formatIsoToDate(arr[i - 1].time)) {
      uniqueDates.push(pointDate);
    }
  });

  console.log(uniqueDates);

  return (
    <section id="forecast-hourly-list" className="my-10 mx-auto">
      {points.map((point, i) => {
        const time = formatISOToHoursAndMinutes(point.time);

        return (
          <WeatherForecastListItem
            key={i}
            time={time}
            iconName={point.data.next_1_hours?.summary.symbol_code}
            temperature={point.data.instant.details?.air_temperature}
            precipitationAmount={
              point.data.next_1_hours?.details.precipitation_amount
            }
            windSpeed={point.data.instant.details?.wind_speed}
          />
        );
      })}
    </section>
  );
};

function formatIsoToDate(isoString: string) {
  return format(new Date(isoString), "yyyy-LL-dd");
}

export default WeatherForecastList;
