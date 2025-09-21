import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function WeatherWidget() {
  const forecast = [
    { day: 'Thursday', date: '11 Sep 2024', icon: '🌦', temp: 29 },
    { day: 'Friday', date: '11 Sep 2024', icon: '⛅', temp: 22 },
    { day: 'Saturday', date: '11 Sep 2024', icon: '💦', temp: 19 },
  ];

  return (
    <div className="bg-white  shadow rounded-3xl flex flex-col w-full  ">
      <div className=" bg-primary-dark flex justify-center items-center py-5">
        <div>
          <div className="flex items-center gap-1 md:gap-2">
            <IoChevronBackOutline className="text-white inline-block " size={20} />
            <h3 className="font-semibold text-white text-md md:text-lg text-center">Today's Weather</h3>
            <IoChevronForwardOutline className="text-white inline-block " size={20} />
          </div>
          <h3 className=" text-white text-center text-[10px] md:text-[12px] text-textgray-">Wednesday, 10 September 2025</h3>

        </div>
      </div>
      <div className="p-6">
        <p className="text-4xl text-sidebar-bg font-bold text-center ">⛅23°</p>
        <p className="text-sm text-sidebar-bg font-extrabold text-center border-b-2 border-gray-300 pt-3 pb-1 ">Moon Cloud Fast Wind</p>
        <p className="text-sm  font-extrabold text-sidebar-bg text-center pt-3 pb-2 ">Future Weather</p>

        <div className=" text-sm text-gray-700 space-y-3">
          {forecast.map((f, i) => (
            <div className=''>
              <div className=" flex justify-center gap-2 items-center border-b-2 border-gray-200 pb-2 pt-2" key={f.day}>
                <p className="font-bold text-xl">
                  {f.icon} {f.temp}°
                </p>
                <div className="flex flex-col  tex-sm  font-extrabold text-sidebar-bg">
                  <p>
                    {f.day}
                  </p>
                  <p>
                    {f.date}
                  </p>
                </div>
              </div>
              {/* {i !== forecast.length - 1 && (
                <div className="flex justify-center">
                  <hr className='mb-2 mt-2 w-[80%] border-gray-200 border-[1px]' />
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
