export function getEventStatus(start_time, end_time) 
{
    if(!start_time || !end_time)
        return "Offline";
    
    const today = new Date().getTime();
    const start = new Date(start_time).getTime();
    const end = new Date(end_time).getTime();

    if(!start || !end)
        return "Offline";

    else if(today < start)
        return "Soon";

    else if(today >= start && today <= end)
        return "Online";

    else
        return "Offline";
}