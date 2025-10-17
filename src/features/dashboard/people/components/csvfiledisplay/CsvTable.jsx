import { RiCloseLargeFill } from "react-icons/ri";
import ToggleDesignBtn from "../../../finance/components/form/ToggleDesignBtn";

const CsvTable = ({ data, setShow }) => {
  return (
    <div className="relative pt-4 shadow rounded bg-white pb-10">
      <button
        onClick={() => setShow(false)}
        className="absolute top-4 right-4  font-bold "
      >
        <RiCloseLargeFill color="#800080" size={22} />
      </button>

      <div className="overflow-x-auto mt-6 px-6 py-4 max-h-[400px] overflow-y-scroll">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-gray-100 text-buttonpurple">
            <tr className="align-middle">
              <th className="px-4 py-3 border-b text-left font-semibold">Success</th>
              <th className="px-4 py-3 border-b text-left font-semibold">Full Name</th>
              <th className="px-4 py-3 border-b text-left font-semibold">Phone Number</th>
              <th className="px-4 py-3 border-b text-left font-semibold">Email</th>
              <th className="px-4 py-3 border-b text-left font-semibold">Company</th>
              <th className="px-4 py-3 border-b text-left font-semibold">Position</th>
              <th className="px-4 py-3 border-b text-left font-semibold">Category</th>
            </tr>
          </thead>

          <tbody>
            {data?.length > 0 &&
              data.map((attendee, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 cursor-pointer text-gray-700 align-middle"
                >
                  <td className="px-4 py-3 border-b align-middle ">
                    {attendee.success ? (
                      <ToggleDesignBtn status="Success" />
                    ) : (
                      <ToggleDesignBtn status="Failure" />
                    )}
                  </td>
                  <td className="px-4 py-3 border-b align-middle">{attendee.full_name || "-"}</td>
                  <td className="px-4 py-3 border-b align-middle">{attendee.phone_number || "-"}</td>
                  <td className="px-4 py-3 border-b align-middle">{attendee.gmail || "-"}</td>
                  <td className="px-4 py-3 border-b align-middle">{attendee.company || "-"}</td>
                  <td className="px-4 py-3 border-b align-middle">{attendee.position || "-"}</td>
                  <td className="px-4 py-3 border-b align-middle">{attendee.category || "-"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CsvTable;
