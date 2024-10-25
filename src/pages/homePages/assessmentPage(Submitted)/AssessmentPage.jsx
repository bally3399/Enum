'use client'
import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import AssessmentNavbar from "@/component/assessmentNavbar/AssessmentNavbar";
import congratulation from "../../../asset/congratulationFrame.png"
import Assessment from "@/component/assessment/Assessment";

const QuizCompletionModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <AssessmentNavbar/>
            <div className="overflow-x-hidden">
            <Assessment/>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                            onClick={closeModal}
                        >
                            <IoClose size={24} />
                        </button>

                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                <Image src={congratulation} alt="Celebration Icon"/>
                            </div>

                            <h2 className="text-2xl font-bold text-green-600 mb-2">
                                Well done!
                            </h2>
                            <p className="text-center text-gray-600 mb-4">
                                You will be notified once you are granted admission.
                            </p>

                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                onClick={closeModal}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default QuizCompletionModal;
