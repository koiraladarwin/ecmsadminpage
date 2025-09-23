import { FaCheck } from "react-icons/fa";
export default function UserRegistrationSuccess()
{
    return(
        <div className="flex justify-end h-30 m-10 fixed inset-0 z-50">
            <div className="bg-green-bg flex items-center gap-4 border-none rounded-lg  text-white w-80">
                <FaCheck className="text-white size-18 pl-2"/>
                Your registration has been successfully done.
                Please check your mail for onboarding code.
            </div>

        </div>
    )
}