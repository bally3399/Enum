'use client'
import Navbar from "@/component/navbar/Navbar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import henleyLogo from "../../../asset/henleyLogo.png"
import profilePic from "../../../asset/profilePics.png"
import video from "../../../asset/video.png"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {useState} from "react";
import minus from "../../../asset/minus.png";
import clock from "../../../asset/clock.png";
import plus from "../../../asset/plus.png"
import PageInformation from "@/component/pageInfo/PageInformation";
import FeeCard from "@/component/feeCard/FeeCard";
import PartnerCarousel from "@/component/partnerCarousel/PartnerCarousel";

const ClientPage = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <Navbar/>
            <PageInformation/>
            <PartnerCarousel/>
            <div className={'flex pt-6 bg-white'}>
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
                            <p>• Understand forms of market imperfections and their implications for financial
                                managers</p>
                            <p>• Generate a valuation range for a project or a company</p>
                            <p>• Apply option theories to solve corporate finance problems</p>
                            <p>• Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity
                                analysis</p>
                            <p>• Understand various forms of market imperfections and their implications for
                                financial </p>
                        </div>

                        <div className={'pl-[65px] pt-6 bg-white'}>
                            <h1 className={'font-bold'}>Courses</h1>
                            <p>There are seven courses in the program</p>
                        </div>

                        <div className={'pl-[65px] pt-12 bg-white'}>
                            <div className={'flex gap-2'}>
                                <h1 className={'font-bold'}>Course1</h1>
                                <li>3 Credit Units</li>
                            </div>
                            <h4>Business Ethics</h4>
                        </div>
                        <div className={'pl-[65px] pt-6 bg-white'}>
                            <h1 className={'font-bold'}>Description</h1>
                            <p className={'pt-6'}>This course examines important issues in corporate finance from the
                                perspectives of financial managers
                                <span className={'block'}>who make important investment decisions and financing decisions.
                            This course incorporates an element</span>of financial modelling in teaching and
                                assessments.
                            </p>
                        </div>

                        <div className={'pl-[65px] pt-6 bg-white'}>
                            <h1 className={'font-bold'}>Objective</h1>
                            <p className={'pt-6'}>This course examines important issues in corporate finance from the
                                perspectives of financial managers
                                <span className={'block'}>who make important investment decisions and financing decisions.
                            This course incorporates an element</span>of financial modelling in teaching and
                                assessments.
                            </p>
                        </div>
                        <div>
                            <div className={'pl-[65px] pt-6 bg-white'}>
                                <h1 className={'font-bold pb-6'}>Instructor</h1>
                                <div className={'gap-4 pb-3 flex'}>
                                    <Image src={profilePic} alt={'picture'}/>
                                    <h1>Olamide Adebisi, PH.D.<span className={'block'}>Henley Business School • Head Professor</span>
                                    </h1>
                                </div>
                                <h1>Olamide taught Donald Trump in Kindergarten. She has 25 years experience teaching
                                    presidents
                                    <span className={'block'}>design related courses. She has a PhD in Education management and is a member of faculty</span> at
                                    the Henley Business School.</h1>
                            </div>
                            <div className={'pl-[65px] pt-6 bg-white'}>
                                <div className={'pb-6'}>
                                    <h1 className={'font-bold pb-6'}>Instructor’s Introductory Message</h1>
                                    <p>Here’s a message from the instructor. Click play to watch it.</p>
                                </div>
                                <Image className={'w-[600px]'} src={video} alt={'vid'}/>
                            </div>
                        </div>
                        <div className={'pl-[65px] pt-6 bg-white'}>
                            <h1 className={'font-bold'}>Modules</h1>
                            <div className={'pl-8 pt-6 flex gap-40'}>
                                <h1 className={'text-[#1095f0]'}>Module1</h1>
                                <div className={''} onClick={() => setOpen(!isOpen)}>{isOpen ? <ExpandMoreIcon/> :
                                    <KeyboardArrowUpIcon/>}</div>
                            </div>
                            <div className={'pl-8 pt-6 bg-white'}>
                                <h1 className={'font-bold pb-6'}>At the end of the module, the learner should: </h1>
                                <li>Understand various forms of market imperfections and their implications for
                                    financial
                                    managers
                                </li>
                                <li>Generate a valuation range for a project or a company</li>
                                <li>Apply option theories to solve corporate finance problems</li>
                                <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity
                                    analysis
                                </li>
                            </div>
                            <div className={'pl-8 pt-6 bg-white'}>
                                <h1 className={'font-bold'}>Sessions</h1>
                                <div className={'pb-6 flex gap-40'}>
                                    <h1 className={'pt-6 pb-6'}>SESSION 1<span className={'block font-bold'}>How International Business Bloom</span>
                                    </h1>
                                    <div className={'flex gap-2'}>
                                        <button className={'p-3 m-2 border-0 mt-6'}>
                                            0% Complete
                                        </button>
                                        <button className={'p-3 m-2 border-0 mt-6'}>
                                            <Image src={minus} alt={'picture'}/>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h1 className={'font-bold pb-6'}>Description</h1>
                                    <p>This course examines important issues in corporate finance from the perspectives
                                        of
                                        financial
                                        <span className={'block'}>managers who make important investment decisions and financing decisions. This</span>
                                    </p>
                                    <p className={'text-[#1095f0] pt-6'}>See More</p>
                                </div>

                            </div>
                            <div>
                                <h1 className={'font-bold pt-6 pl-8'}>Learning activities</h1>
                                <div className={'pl-10 pt-6'}>
                                    <div className={'pb-6'}>
                                        <p>Video: Introduction to Module</p>
                                        <div className={'flex gap-4 border-b-2 pb-6 pt-2'}>
                                            <Image src={clock} alt={'clock'}/>
                                            <p>3 mins</p>
                                        </div>
                                    </div>

                                    <div className={'pb-6'}>
                                        <p>Reading: Learning Content 1</p>
                                        <div className={'flex gap-4 border-b-2 pb-6 pt-2'}>
                                            <Image src={clock} alt={'clock'}/>
                                            <p>3 mins</p>
                                        </div>
                                    </div>

                                    <div className={'pb-6 text-[#1095f0]'}>
                                        <p>Video: Learning Content 2</p>
                                        <div className={'flex gap-4 border-b-2 pb-6 pt-2'}>
                                            <Image src={clock} alt={'clock'}/>
                                            <p>3 mins</p>
                                        </div>
                                    </div>

                                    <div className={'pb-6'}>
                                        <p>Audio: Learning Content 2</p>
                                        <div className={'flex gap-4 border-b-2 pb-6 pt-2'}>
                                            <Image src={clock} alt={'clock'}/>
                                            <p>3 mins</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center border-b pb-4">
                                        <h1 className="text-lg pl-8">
                                            SESSION 2
                                            <span
                                                className="block text-gray-500 text-sm">Introduction to Accounting</span>
                                        </h1>
                                        <button className="border border-gray-400 rounded-full p-2">
                                            <Image src={plus} alt="plus"/>
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-center border-b pb-4">
                                        <h1 className="text-lg pl-8">
                                            SESSION 3
                                            <span className="block text-gray-500 text-sm">Prezi Presentation Tool</span>
                                        </h1>
                                        <button className="border border-gray-400 rounded-full p-2">
                                            <Image src={plus} alt="plus"/>
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-center border-b pb-4">
                                        <h1 className="text-lg pl-8">
                                            SESSION 4
                                            <span
                                                className="block text-gray-500 text-sm">Introduction to Business Law</span>
                                        </h1>
                                        <button className="border border-gray-400 rounded-full p-2">
                                            <Image src={plus} alt="plus"/>
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-center border-b pb-4">
                                        <h1 className="text-lg pl-8">
                                            SESSION 5
                                            <span className="block text-gray-500 text-sm">Excel Tool</span>
                                        </h1>
                                        <button className="border border-gray-400 rounded-full p-2">
                                            <Image src={plus} alt="plus"/>
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-center border-b pb-4">
                                        <h1 className="text-lg pl-8">
                                            SESSION 6
                                            <span className="block text-gray-500 text-sm">Power BI</span>
                                        </h1>
                                        <button className="border border-gray-400 rounded-full p-2">
                                            <Image src={plus} alt="plus"/>
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <FeeCard/>
            </div>
        </div>
    );
};

export default ClientPage;


