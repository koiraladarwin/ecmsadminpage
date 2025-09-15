import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function WeatherWidget() {
  const forecast = [
    { day: 'Thursday', date: '11 Sep 2024', icon: '🌦', temp: 29 },
    { day: 'Friday', date: '11 Sep 2024', icon: '⛅', temp: 22 },
    { day: 'Saturday', date: '11 Sep 2024', icon: '🌧', temp: 19 },
  ];

  return (
    <div className="bg-white shadow rounded-3xl flex flex-col">
      <div className="px-6 bg-primary-dark h-[85px] flex justify-center items-center">
        <div>
          <div className="flex items-center">
            <IoChevronBackOutline className="text-white inline-block mr-4" size={20} />
            <h3 className="font-bold text-white text-xl text-center">Today's Weather</h3>
            <IoChevronForwardOutline className="text-white inline-block ml-4" size={20} />
          </div>
          <h3 className="font-bold text-white text-sm text-textgray-">Wednesday, 10 September 2025</h3>

        </div>
      </div>
      <div className="p-6">
        <p className="text-4xl font-bold text-center ">⛅23°C</p>
        <p className="text-sm  font-bold text-center ">Moon Cloud Fast Wind</p>
        <div className="flex justify-center">
          <hr className='mb-2 mt-2 w-[90%] border-gray-200 border-[1px]' />
        </div>
        <p className="text-sm  font-bold text-center mt-3">Future Weather</p>

        <div className="mt-4 text-sm text-gray-700 space-y-3">
          {forecast.map((f, i) => (
            <div>
              <div className=" flex justify-evenly items-center" key={f.day}>
                <p className="font-bold text-xl">
                  {f.icon} {f.temp}°C
                </p>
                <div className="flex flex-col tex-sm  font-bold">
                  <p>
                    {f.day}
                  </p>
                  <p>
                    {f.date}
                  </p>
                </div>
              </div>
              {i !== forecast.length - 1 && (
                <div className="flex justify-center">
                  <hr className='mb-2 mt-2 w-[80%] border-gray-200 border-[1px]' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
