import { IoMdEye } from "react-icons/io"
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
export default function GeneralInvitationCard({
        name,
        type,
        company,
        image,
})
{
    return(
        <div>
            <div className="border border-textgray rounded-2xl shadow-2xl ">
                <div className="flex gap-8 m-2 p-2">
                    <div >
                        <img src={image} alt="" className="w-14 h-14 border-2 rounded-full border-buttonpurple" />

                    </div>
                    <div>
                        <h1>{name}</h1>
                        <p className="text-xs text-textgray opacity-75">{type}</p>
                        <h3 className="text-sm text-textgray">{company}</h3>
                    </div>
                </div>

                <hr className="text-textgray"/>

                <div className="flex gap-4 items-center justify-center m-2">
                    <IoMdEye size={30} color="grey"/> 
                    <FaWhatsapp size={24} color="grey"/>
                    <CiMail size={24} color="grey"/>
                </div>

            </div>
        </div>
    )
}