import TicketForm from "../components/TicketForm";
export default function CreateTicket() {
  return (
    <div className='flex min-h-screen bg-bglightpurple'>

      <div className='w-full'>
        <div className='pt-15 pr-15 pl-15 flex justify-between text-xl '>
          <h1>Add a new Ticket</h1>

        </div>

        <hr className="ml-15 mr-15 mt-5 border-1 border-textgray" />
          <TicketForm />
      </div>
    </div>
  )
}
