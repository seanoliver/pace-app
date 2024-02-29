const HOURS = 24
const INTERVAL = 15

export const DayGrid = () => {

  const intervalsPerHour = 60 / INTERVAL

  return (
    <div>
      <h1>Day Grid</h1>
      <div>
        {Array.from({ length: HOURS * intervalsPerHour }).map((_, index) => (
          <IntervalCell key={index} hour={Math.floor(index / intervalsPerHour)} interval={index % intervalsPerHour} />
        ))}
      </div>
    </div>
  );
}

export const IntervalCell = ({hour, interval}: { hour: number, interval: number }) => {
  return (
    <div className="border broder-rose-50 w-10 h-10 flex items-center justify-center">
      {hour}:{interval}
    </div>
  );
}