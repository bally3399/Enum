'use client'
import Navbar from "@/component/navbar/Navbar";
import PageInformation from "@/component/pageInfo/PageInformation";
import PartnerCarousel from "@/component/partnerCarousel/PartnerCarousel";
import Instructions from "@/component/instructions/Instructions";
import { useState } from "react";

const AssessmentClicked = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <Navbar />
            <PageInformation />
            <PartnerCarousel />
            <div className="my-8 text-black">
                <div className="mx-auto max-w-[800px] px-4">
                    <p className="text-2xl font-bold mb-6">Business Management Application Assessment</p>
                    <Instructions />
                    <div className="mb-7">
                        <p className="text-[15px] font-bold mb-3">Test Instructions</p>
                        <p>Attempt all Questions</p>
                    </div>
                    <div className="flex items-center gap-2 pb-6">
                        <input
                            type="checkbox"
                            id="instructions-read"
                            className="bg-[#D0DCE4] text-white p-3 rounded-md hover:bg-[#D0DCE4]"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        <label htmlFor="instructions-read" className="text-sm font-bold">
                            I have read and understood all the instructions above
                        </label>
                    </div>
                    <button
                        className={`py-2 px-4 bg-gray-300 text-white rounded-md ${
                            isChecked ? "bg-blue-500 cursor-pointer" : "cursor-not-allowed"
                        }`}
                        disabled={!isChecked}
                    >
                        Begin Assessment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssessmentClicked;
