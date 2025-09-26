import { useState } from "react"
import FilterTab from "../../people/components/FilterTab"
import SalesTicketForm from "../components/form/SalesTicketForm"
import BuyPlanForm from "../components/form/BuyPlanForm"
import ToggleDesignBtn from "../components/form/ToggleDesignBtn";



function FinancePage() {
  const [activeTab, setActiveTab] = useState('Sales Ticket');

  return (
    <div className="px-20 py-10">
      <div className="border-b-[1.3px]">
        <FilterTab filterByTitle1="Sales Ticket" filterByTitle2="Buy Plan" activeTab={activeTab} setActiveTab={setActiveTab} bottomBorder={true} />
      </div>

      <div className="pt-10">
        {
          activeTab === "Sales Ticket" ? <SalesTicketForm /> : <BuyPlanForm />
        }
      </div>
    </div>
  )
}

export default FinancePage