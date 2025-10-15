export default function SelectSession()
{
    return (
        <div>
            <form className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 space-y-2'>
                {["Session 1", 
                    "Session 2", 
                    "Session 3", 
                    "Session 4", 
                    "Session 5"].map((session,i) => (
                <label key={i} className='flex items-center space-x-2 cursor-pointer'>
                    <input type="radio"
                        name='session'
                        value={session}
                        className='accent-buttonpurple w-4 h-4'
                    />
                    <span>{session}</span>
                </label>
                ))}
              </form>
        </div>
    )
}