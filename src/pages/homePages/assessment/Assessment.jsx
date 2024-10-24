import {HiArrowLeft} from "react-icons/hi";
import Image from "next/image";
import rectangle from "@/asset/Rectangle.png";
import AssessmentNavbar from "@/component/assessmentNavbar/AssessmentNavbar";

const Assessment = () =>{
    return(
        <div>
            <AssessmentNavbar/>
            <div className={'mx-[200px] mb-10'}>
                <div className="pl-[45px] pt-4">
                    <button className="flex items-center text-black hover:underline">
                        <HiArrowLeft className="mr-2"/> Back
                    </button>
                </div>
                <div className="relative my-[50px]">
                    <Image src={rectangle} alt="Rectangle" className="relative w-full h-auto"/>
                    <div
                        className="border border-b-blue-500 absolute inset-0 bg-gradient-to-b from-[#008EEF] to-transparent h-[60%]"></div>
                </div>
                <div className={'text-black flex justify-between'}>
                    <div>
                        <p className={'h-[31px] w-[527px] font-[600] text-[20px]  leading-[31.2px] tracking-[-2]'}>Business
                            Management Application Assessment</p>
                        <p className={'text-[#6E7EA8] h-[28px] w-[151px] text-[14px] font-[400] leading-[28px]'}>4
                            Questions · 5 mins</p>
                    </div>
                    <p className={'text-[12px] font-[500] leading-[15.62px] tracking-[10%]'}>TOTAL UNANSWERED: 4</p>
                </div>
            </div>
        </div>
    )
}
export default Assessment