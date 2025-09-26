import React from "react";
import useSettingsStaff from "../../../../hooks/Use-SettingsStaff-List";

export default function StaffList() {
  const staffList = useSettingsStaff();

  return (
    <div className="w-full overflow-x-auto">

      <table className="hidden lg:table w-full text-left">

        <thead>
          <tr className="border-b border-gray-300">
            <th className="p-3">ID</th>
            <th className="p-3">Staff</th>
          </tr>
        </thead>

        <tbody>
          {staffList.map((item, index) => (
            <tr key={index} className="last:border-0">
              <td className="p-3">{item.id}</td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{item.name}</span>
                </div>
              </td>
              <td className="p-3 flex gap-4">
                <span className="underline cursor-pointer">Sent Code</span>
                <span className="underline cursor-pointer">Remove</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="lg:hidden space-y-3">
        {staffList.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 shadow-sm flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">ID: {item.id}</p>
              </div>
            </div>
            <div className="flex justify-between text-sm underline cursor-pointer">
              <span>Sent Code</span>
              <span>Remove</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
