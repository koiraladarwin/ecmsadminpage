import useHireTeam from '../../../../hooks/Use-HireTeam';

export default function HiringDetailCard()
{
    const hireData = useHireTeam();

    return(
        <div>
            <div className='hidden lg:grid  lg:grid-cols-4 font-bold lg:border-b'>
                <h1>Event</h1>
                <h1>Total Scanner</h1>
                <h1>Sessions</h1>
                <h1>Amount</h1>
            </div>

            {/* Hiring details */}
            <div>
                {
            hireData.map((item, i) => {
                const vatAmount = Math.round(item.amount * item.vatRate);
                const total = item.amount + vatAmount;

                return(
                <div key={i}>

                    {/* small screen */}

                    <div className='block lg:hidden space-y-2 text-sm'>
                    <div className='flex justify-between'>
                    <span className='font-bold'>Event</span>
                    <span>{item.eventName}</span>
                    </div>
                    
                    <div className='flex justify-between'>
                    <span className='font-bold'>Total Scanner</span>
                    <span>{item.totalScanner}</span>
                    </div>
                    

                    <div className='flex justify-between'>
                        <span className='font-bold'>Sessions</span>
                        <span >
                        {item.sessions.map((sessions, i) => (
                            <p key={i}>{sessions}</p>
                        ))}
                        </span>
                    </div>

                    <div className='flex justify-between'>
                        <span className='font-bold'>Amount</span>
                        <span>{item.amount}</span>
                    </div>
                    </div>

                    {/* large Screen */}

                    <div className='hidden lg:grid lg:grid-cols-4 py-2'>
                    <p>{item.eventName}</p>
                    <p className='ml-10'>{item.totalScanner}</p>

                    <div>
                        {item.sessions.map((sessions, i) => (
                        <p key={i}>{sessions}</p>
                        ))}
                    </div>

                    <p>{item.amount}</p>
                    </div>
                    <hr className="my-4 border-1 border-textgray" />

                    {/* summary */}

                    <div className='text-right mt-2 space-y-1'>
                    <p className='lg:block lg:space-x-48 lg:mr-57 sm:flex sm:justify-between '>
                        <span>Taxable Amount </span> 
                        <span>{item.amount}</span>
                    </p>

                    <p className='lg:block lg:space-x-52 lg:mr-57 sm:flex sm:justify-between '>
                        <span>Add 13% VAT</span> 
                        <span>{vatAmount}</span>
                    </p>

                    <hr className=" sm:my-4 lg:ml-100 border-1 border-textgray" />


                    <p className='font-bold sm:flex sm:justify-between lg:block lg:space-x-48 lg:mr-57'>
                        <span>Taxable Amount</span>
                        <span>{total}</span>
                    </p>

                    </div>

                </div>
                )
            })
            }
            </div>

            <div>
                <button className='text-lg px-4 py-1 sm:mt-4 rounded-full text-white bg-buttonpurple flex justify-self-end lg:mr-48'>Pay now</button>
            </div>
        </div>
    )
}