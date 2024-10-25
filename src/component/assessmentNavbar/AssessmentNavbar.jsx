import Image from "next/image";
import enum_logo from "@/asset/enumLogo.png";

const AssessmentNavbar = () => {
    return (
        <div className="flex justify-between items-center m-4 p-3">
            <div className="flex items-center mb-2">
                <Image src={enum_logo} alt="enum logo" width={25} height={15} />
                <p className="font-bold">enum</p>
            </div>

            <button className="border border-blue-500 rounded-md p-2 text-blue-500 text-sm font-bold">
                Cancel
            </button>
        </div>
    );
};

export default AssessmentNavbar;
