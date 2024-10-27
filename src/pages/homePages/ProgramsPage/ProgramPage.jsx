import Navbar from "@/component/navbar/Navbar";
import { HiArrowLeft } from 'react-icons/hi';
import MidNavbar from "@/component/mid-navbar/MidNavbar";
import ProgramsPage from "../../homePages/programsPage/index";

const ProgramPage = () => {
    return (
        <div>
            <Navbar />
            <MidNavbar/>
            <div className="absolute -top-24 left-4">
                <button className="flex items-center text-[#093c5e] hover:underline">
                    <HiArrowLeft className="mr-2" /> Back
                </button>
                <h1 className={'font-bold '}>Explore Programs</h1>
            </div>

            <ProgramsPage />
        </div>
    );
};

export default ProgramPage;
