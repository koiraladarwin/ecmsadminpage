import SalesTicketForm from "../components/form/SalesTicketForm"
import FinanceScreenHeader from "../components/FinanceHeader";



function FinancePage() {
  return (
    <div className="pt-5 px-20 pb-5">
      <FinanceScreenHeader title="Sale Ticket" showBtn={false} showForm={false} />
      <div className="pt-5">
        <SalesTicketForm />
      </div>
    </div>
  )
}

export default FinancePage