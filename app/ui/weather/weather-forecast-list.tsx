import { WeatherForecastContext } from "@/app/contexts/weather-data-context";
import { formatISOToHoursAndMinutes } from "@/app/lib/time/time";
import WeatherForecastListItem from "@/app/ui/weather/weather-forecast-list-item";
import { format } from "date-fns";
import ForecastPointDate from "@/app/ui/dates/forecast-point-date";
import { type FC, useContext } from "react";
import { nanoid } from "nanoid";

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

  return (
    <section id="forecast-hourly-list" className="my-10 mx-auto">
      {points.map((point, i, arr) => {
        const time = formatISOToHoursAndMinutes(point.time);

        return (
          <>
            {i === 0 ? (
              <ForecastPointDate date={uniqueDates[0]} key={nanoid()} />
            ) : formatIsoToDate(point.time) === uniqueDates[1] &&
              formatIsoToDate(arr[i - 1].time) !==
                formatIsoToDate(point.time) ? (
              <ForecastPointDate date={uniqueDates[1]} key={nanoid()} />
            ) : (
              <div key={nanoid()}></div>
            )}
            <WeatherForecastListItem
              key={nanoid()}
              time={time}
              iconName={point.data.next_1_hours?.summary.symbol_code}
              temperature={point.data.instant.details?.air_temperature}
              precipitationAmount={
                point.data.next_1_hours?.details.precipitation_amount
              }
              windSpeed={point.data.instant.details?.wind_speed}
            />
          </>
        );
      })}
    </section>
  );
};

function formatIsoToDate(isoString: string) {
  return format(new Date(isoString), "yyyy-LL-dd");
}

export default WeatherForecastList;
