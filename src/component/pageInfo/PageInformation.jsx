import React from 'react';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HiArrowLeft } from 'react-icons/hi';
import semicolonLogo from "../../asset/semicolonLogo.png";
import heroImage from "../../asset/image1.png"


const ProgramInfo = () => {
    return (
        <div className="flex">
            <div className="w-[60%] bg-blue-800 text-white">
                <div className="flex text-white items-center pb-2 pt-5 ml-[65px] text-sm">
                    <span>Programs</span>
                    <ArrowForwardIosIcon className="mx-2"/>
                    <span>All Programs</span>
                    <ArrowForwardIosIcon className="mx-2"/>
                    <span>Business Leadership</span>
                    <ArrowForwardIosIcon className="mx-2"/>
                    <span>Program Information</span>
                </div>

                <div className="ml-[65px] pt-4">
                    <button className="flex items-center text-white hover:underline">
                        <HiArrowLeft className="mr-2"/> Back
                    </button>
                </div>

                <h1 className="ml-[65px] font-semibold text-4xl pt-8">Business Leadership</h1>

                <div className="ml-[65px] flex gap-5 mt-8 items-center">
                    <Image src={semicolonLogo} alt="Semicolon Logo" className="w-12 h-12"/>
                    <div>
                        <p className="text-sm">OFFERED BY</p>
                        <p className="text-lg">Semicolon Africa</p>
                    </div>
                </div>

                <div className="ml-[65px] flex items-center gap-4 mt-12">
                    <button
                        className="bg-white text-blue-800 px-4 mb-2 py-2 rounded hover:bg-gray-100 flex items-center">
                        Apply Now
                    </button>
                    <p className="text-sm mt-1">5,000 students already enrolled</p>
                </div>
            </div>

            <Image src={heroImage} alt="Hero Image" className="w-[40%] h-auto object-cover"/>
        </div>
    );
};

export default ProgramInfo;
