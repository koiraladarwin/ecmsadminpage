export default function WeatherWidget() {
  const forecast = [
    { day: 'Thursday', icon: '🌦', temp: 29 },
    { day: 'Friday', icon: '⛅', temp: 22 },
    { day: 'Saturday', icon: '🌧', temp: 19 },
  ];

  return (
    <div className="bg-white shadow rounded-3xl p-4">
      <h3 className="font-bold mb-2">Today's Weather</h3>
      <p className="text-lg">23°C</p>
      <p className="text-sm text-gray-600">Moon Cloud Fast Wind</p>
      <div className="mt-4 text-sm text-gray-700 space-y-1">
        {forecast.map((f) => (
          <p key={f.day}>
            {f.icon} {f.day}: {f.temp}°C
          </p>
        ))}
      </div>
    </div>
  );
}
