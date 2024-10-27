import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const MidNavbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="flex pt-4 gap-11 flex-col items-center bg-white w-full">
            <div className="flex items-center justify-center w-full h-[50px] gap-x-4 py-2">
                <button
                    onClick={() => setOpen(!isOpen)}
                    className="border border-gray-300 rounded-full flex items-center px-3 py-1 text-gray-600"
                >
                    <span>Price</span>
                    {isOpen ? (
                        <KeyboardArrowUpIcon className="ml-1 text-gray-600" />
                    ) : (
                        <ExpandMoreIcon className="ml-1 text-gray-600" />
                    )}
                </button>

                <button className="border border-gray-300 rounded-full flex items-center px-3 py-1 text-gray-600">
                    <span>Application Fees</span>
                    <ExpandMoreIcon className="ml-1 text-gray-600" />
                </button>

                <button className="border border-gray-300 rounded-full flex items-center px-3 py-1 text-gray-600">
                    <span>Duration</span>
                    <ExpandMoreIcon className="ml-1 text-gray-600" />
                </button>

                <button className="text-blue-500 hover:underline">Reset Filters</button>
            </div>
            <div className="w-full border-b-2 border-blue-500 mt-2" />
        </div>
    );
};

export default MidNavbar;
