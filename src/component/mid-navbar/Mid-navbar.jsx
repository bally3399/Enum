import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from '../../styles/index.module.css'
import { useState } from "react";


const MidNavbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={styles.midNavbar}>
            <div className="flex items-center justify-center w-full bg-white h-[50px] gap-x-[30px]">
                <button
                    onClick={() => setOpen(!isOpen)}
                    className="border border-gray-300 rounded-full flex items-center justify-between"
                >
                    <span className="text-gray-600">Price</span>
                    {isOpen ? (
                        <KeyboardArrowUpIcon className="w-4 h-4 text-gray-600"/>
                    ) : (
                        <ExpandMoreIcon className="w-4 h-4 text-gray-600"/>
                    )}
                </button>

                <button className="border border-gray-300 rounded-full flex items-center justify-between">
                    <span className="text-gray-600">Application fees</span>
                    <ExpandMoreIcon className="w-4 h-4 text-gray-600"/>
                </button>

                <button className="border border-gray-300 rounded-full flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <ExpandMoreIcon className="w-4 h-4 text-gray-600"/>
                </button>

                <button className="text-gray-600 hover:underline">
                    Reset Filters
                </button>
            </div>

            <div className="w-full border-b-2 border-blue-500 mt-2"/>

        </div>
    );
};

export default MidNavbar;
