import { useTicketStatus } from "../../../../../hooks/Use-finance-ticketStatus";
import Swal from "sweetalert2";

function ToggleDesignBtn({ status, ticket_id, attendee_id, name, onStatusChange }) {

  const {mutateAsync: updateStatus, isPending} = useTicketStatus();


  const normalizedStatus = status === true || status === "true";
  const displayStatus = normalizedStatus ? "Paid" : "Unpaid";
  const isPositive = normalizedStatus;

  const handleToggle = async () => {
    const newStatus = !(status === true || status === "true");
    const targetStatus = newStatus ? "paid" : "unpaid";
    
    // popup
    const result = await Swal.fire({
      title: "Confirm Status Change",
      text: `Are you sure you want to change ${name}'s status to ${targetStatus}?`,
      icon: "warning",
      confirmButtonText: "Confirm",
      confirmButtonColor: "#772A92",
      iconColor: "#FF0000"
      
    });

    if(result.isConfirmed)
    {
      Swal.fire({
        title: "Updating...",
        text: "Please wait a moment",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      try{
        await updateStatus({ticket_id, attendee_id, status: newStatus});
        onStatusChange(ticket_id, newStatus);

        Swal.fire({
          icon: "success",
          title: "Status Updated",
          text: `${name}'s status has been changed to ${targetStatus}.`,
          timer:1800,
          showConfirmButton: false,
        });
      }catch(error)
      {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Could not update the ticket status. Please try again.",
        });
      }
    }
  } ;
  return (
    <>
    <div
      onClick={handleToggle} 
      className={`inline-flex items-center justify-center gap-1 px-2 py-1 rounded-full cursor-pointer min-w-[70px] ${isPositive ? 'bg-green-500' : 'bg-buttonred'}`}>
      {isPositive ? (
        <>
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="text-white text-xs font-medium">{displayStatus}</span>
        </>
      ) : (
        <>
          <span className="text-white text-xs font-medium">{displayStatus}</span>
          <span className="w-3 h-3 bg-white rounded-full"></span>
        </>
      )}
    </div>

      
    </>
  )
}

export default ToggleDesignBtn
