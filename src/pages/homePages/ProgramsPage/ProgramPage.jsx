'use client'
import Navbar from "@/component/navbar/Navbar";
import {HiArrowLeft} from 'react-icons/hi';
import MidNavbar from "@/component/mid-navbar/MidNavbar";
import ProgramsPage from "@/pages/homePages/programsPage/index";
import Link from "next/link"
const ProgramPage = () =>{

    return(
        <div>
            <Navbar/>
            <MidNavbar/>
            <div className="absolute -top-24 left-4">
                <button
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2"/> Back
                </button>
            </div>
            <ProgramsPage/>
        </div>
    )
}
export default ProgramPage