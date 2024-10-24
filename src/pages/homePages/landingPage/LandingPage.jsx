import Navbar from "@/component/navbar/Navbar";
import PageInformation from "@/component/pageInfo/PageInformation";
import PartnerCarousel from "@/component/partnerCarousel/PartnerCarousel";
import ErrorOutlineTwoToneIcon from "@mui/icons-material/ErrorOutlineTwoTone";
import FeeCard from "@/component/feeCard/FeeCard";

const LandingPage = () => {
    return(
        <div>
            <Navbar/>
            <PageInformation/>
            <PartnerCarousel/>
            <div
                className={'bg-green-100 pb-6 pt-6 gap-5 font-bold text-[#0BCA7A] hover:text-green-400 flex justify-center items-center'}>
                <ErrorOutlineTwoToneIcon/>
                <h1>Admission Granted</h1>
            </div>
            <div className={'flex'}>
                <div className={'w-[70%] border-r-4'}>
                    <div className='flex gap-12 bg-white pb-6 pt-6 items-center shadow-md pl-[65px]'>
                        <div className='cursor-pointer text-black font-black'>About</div>
                        <div className='cursor-pointer text-black'>Program Goals</div>
                        <div className='cursor-pointer text-black'>Program Benefits</div>
                        <div className='cursor-pointer text-black'>Courses</div>
                    </div>
                    <div>
                        <div className={'pl-[65px] bg-white'}>
                            <h1 className={'font-bold'}>About Program</h1>
                            <p>This course examines important issues in corporate finance from the perspectives of
                                financial
                                managers
                                <span className={'block'}>who make important investment decisions and financing decisions. This course incorporates an element</span>
                                <span>of financial modelling in teaching and assessments.</span></p>
                        </div>
                        <div className={'pl-[65px] pt-6 bg-white'}>
                            <h1 className={'font-bold'}>Program Goals</h1>
                            <h4 className={'mt-4 mb-6'}>What you are expected to know after this course</h4>
                            <li>Understand forms of market imperfections and their implications for financial managers
                            </li>
                            <li>Generate a valuation range for a project or a company</li>
                            <li>Apply option theories to solve corporate finance problems</li>
                            <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity
                                analysis
                            </li>
                            <li>Understand various forms of market imperfections and their implications for financial
                            </li>
                            <li>Generate a valuation range for a project or a company</li>
                            <li>Apply option theories to solve corporate finance problems</li>
                            <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity
                                analysis
                            </li>

                        </div>

                        <div className={'pl-[65px] bg-white pt-6'}>
                            <h1 className={'font-bold'}>Program Benefits</h1>
                            <h4 className={'mt-4 mb-6'}>What you are expected to know after this course</h4>
                            <li>Understand forms of market imperfections and their implications for financial
                                managers
                            </li>
                            <li>Generate a valuation range for a project or a company</li>
                            <li>Apply option theories to solve corporate finance problems</li>
                            <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity
                                analysis
                            </li>
                            <li>Understand various forms of market imperfections and their implications for
                                financial
                            </li>
                        </div>

                    </div>
                </div>
                <FeeCard/>
            </div>
        </div>
    )
}
export default LandingPage;