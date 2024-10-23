import Navbar from "@/component/navbar/Navbar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/image";
import semicolonLogo from "../../../asset/semicolonLogo.png";
import heroImage from "../../../asset/image1.png";
import { HiArrowLeft } from "react-icons/hi";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import hanleyLogo from "../../../asset/henleyLogo.png"
const ClientPage = () => {
    return (
        <div>
            <Navbar/>

            <div className="flex">
                <div className="w-[60%] bg-blue-800 text-white">
                    <div className="flex text-white items-center pb-2 pt-5 ml-[8%] text-sm">
                        <span>Programs</span>
                        <ArrowForwardIosIcon className="mx-2"/>
                        <span>All Programs</span>
                        <ArrowForwardIosIcon className="mx-2"/>
                        <span>Business Leadership</span>
                        <ArrowForwardIosIcon className="mx-2"/>
                        <span>Program Information</span>
                    </div>

                    <div className="ml-[8%] mt-4">
                        <button className="flex items-center text-white hover:underline">
                            <HiArrowLeft className="mr-2"/> Back
                        </button>
                    </div>

                    <h1 className="ml-[8%] font-semibold text-4xl mt-8">Business Leadership</h1>

                    <div className="ml-[8%] flex gap-5 mt-8 items-center">
                        <Image src={semicolonLogo} alt="Semicolon Logo" className="w-12 h-12"/>
                        <div>
                            <p className="text-sm">OFFERED BY</p>
                            <p className="text-lg">Semicolon Africa</p>
                        </div>
                    </div>

                    <div className="ml-[8%] flex items-center gap-4 mt-12">
                        <button
                            className="bg-white text-blue-800 px-4 mb-2 py-2 rounded hover:bg-gray-100 flex items-center">
                            Apply Now
                        </button>
                        <p className="text-sm mt-1">5,000 students already enrolled</p>
                    </div>
                </div>

                <Image src={heroImage} alt="Hero Image" className="w-[40%] h-auto object-cover"/>
            </div>
            <div className="flex text-black items-center pb-2 pt-5 ml-[8%] text-sm">
                <span>Partners</span>
                <ArrowBackIosIcon className="mx-2"/>
                <span>Hanley Business School</span>
                <Image src={hanleyLogo} alt={'image'}/>
                <span>Hanley Business School</span>
                <Image src={hanleyLogo} alt={'image'}/>
                <span>Hanley Business School</span>
                <Image src={hanleyLogo} alt={'image'}/>
                <ArrowForwardIosIcon className="mx-2"/>
            </div>
        </div>
    );
};

export default ClientPage;
