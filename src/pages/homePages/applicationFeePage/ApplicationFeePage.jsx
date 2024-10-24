import Navbar from "@/component/navbar/Navbar";
import PageInformation from "@/component/pageInfo/PageInformation";
import PartnerCarousel from "@/component/partnerCarousel/PartnerCarousel";
import FeeCard from "@/component/feeCard/FeeCard";

const ApplicationFeePage =()=>{
    return(
        <div>
            <Navbar/>
            <PageInformation/>
            <PartnerCarousel/>
            <div className={'flex pt-6 bg-white'}>
                <div className={'w-[70%] border-r-4 '}>
                    <h1 className={'font-bold pl-32 pb-6'}>
                        Application Process
                    </h1>
                    <h4 className={'pb-6 pl-32 font-semibold'}>
                        Application Fee
                    </h4>
                    <p className={'pb-6 pl-32'}>
                        Once you make payment for this course, you will receive a confirmation mail
                        <span className={'block'}>with a link for your assessment.</span>
                    </p>

                    <h1 className={'pb-6 pl-32 font-semibold'}>
                        Assessment
                    </h1>
                    <p className={'pb-6 pl-32'}>
                        Once assessment has been taken, you
                    </p>

                    <h1 className={'pb-6 pl-32 font-semibold'}>
                        Program Fee
                    </h1>
                    <p className={'pb-6 pl-32'}>
                        Once you make payment for this course, you will receive a confirmation mail
                        <span className={'block'}>with a link for your assessment.</span>
                    </p>

                </div>
                <FeeCard/>
            </div>
        </div>
    )
}
export default ApplicationFeePage