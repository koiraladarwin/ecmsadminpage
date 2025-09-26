

function ToggleDesignBtn({ status }) {
  const isPaid = status.toLowerCase() === "paid"

  return (
    <div className={`inline-flex items-center justify-center gap-1 px-2 py-1 rounded-full min-w-[70px] ${isPaid ? 'bg-green-500' : 'bg-red-500'}`}>
      {isPaid ? (
        <>
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="text-white text-xs font-medium">{status}</span>
        </>
      ) : (
        <>
          <span className="text-white text-xs font-medium">{status}</span>
          <span className="w-3 h-3 bg-white rounded-full"></span>
        </>
      )}
    </div>
  )
}

export default ToggleDesignBtn
