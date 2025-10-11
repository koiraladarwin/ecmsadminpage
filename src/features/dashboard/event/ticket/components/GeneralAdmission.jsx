import GeneralAdmissionCard from "./GeneralAdmissionCard";
import useGeneralAdmission from "../../../../../hooks/Use-generalAdmission-list"

export default function GeneralAdmission()
{  
    const GeneralAdmission = useGeneralAdmission();
    
    return(
        <div>
            <div className="grid lg:grid-cols-3  grid-cols-1 mt-6 gap-6">
                {GeneralAdmission.map((admission,index) => (
                <GeneralAdmissionCard
                        key={index} {...admission}              
                    />
                ))}
            </div>
        </div>
        )
    
}