import Navbar from "@/component/navbar/Navbar";
import PageInformation from "@/component/pageInfo/PageInformation";
import PartnerCarousel from "@/component/partnerCarousel/PartnerCarousel";
import Instructions from "@/component/instructions/Instructions";

const AssessmentInstructions =() =>{
    return (
        <div>
            <Navbar/>
            <PageInformation/>
            <PartnerCarousel/>
            <div className='my-8 text-black'>
                <div className='mx-[300px]'>
                    <p className='font-[800]'>Business Management Application Assessment</p>
                    <Instructions/>
                    <div className='mb-7'>
                        <p className='text-[15px] font-bold mb-3'>Test Instructions</p>
                        <p>Attempt all Questions</p>
                    </div>
                    <div className='flex gap-2 pb-6'>
                        <input type={"checkbox"} className='py-2 my-2 px-2 border border-black'></input>
                        <p className='mt-2 font-bold text-[12px]'>I have read and understood all the instructions
                            above</p>
                    </div>
                    <button className="bg-[#008EEF] text-white p-3 rounded-md hover:bg-[#008EEF]">
                        Begin Assessment
                    </button>
                </div>
            </div>

        </div>
    )
}
export default AssessmentInstructions