import ToggleDesignBtn from '../ToggleDesignBtn'

function SalesTicketDetailList({ data }) {

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left">
        {/* table header */}
        <thead className='text-[0.8rem]'>
          <tr className="border-b-1">
            <th className="px-1 py-2">ID</th>
            <th className="px-1 py-2">Type</th>
            <th className="px-1 py-2">Full Name</th>
            <th className="px-1 py-2">Company/Organization</th>
            <th className="px-1 py-2">Mobile NO.</th>
            <th className="px-1 py-2">Amount</th>
            <th className="px-1 py-2">Status</th>
          </tr>
        </thead>

        {/*table body */}
        <tbody className='text-[0.85rem] '>
          {data?.map((item, index) => (
            <tr key={index} className='border-b-1 '>
              <td className="px-1 py-2">{item.ticket.id}</td>
              <td className="px-1 py-2">{item.ticket.type}</td>
              <td className="px-1 py-2">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.fullname}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{item.fullname}</span>
                </div>
              </td>
              <td className="px-1 py-2">{item.company}</td>
              <td className="px-1 py-2">{item.phone}</td>
              <td className="px-1 py-2">{item.amount}</td>
              <td className="px-1 py-2"><ToggleDesignBtn status={item.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SalesTicketDetailList
