import React from 'react';
import Link from "next/link";

const FeeCard = () => {
    return (
        <div className="w-[20%] m-12">
            <div className="border p-6 shadow-md">
                <div className="mb-4">
                    <p className="text-gray-500 text-sm">APPLICATION FEE</p>
                    <p className="text-blue-700 text-xl font-bold">₦10,000.00 <span
                        className="text-gray-500 line-through ml-2">₦12,000.00</span></p>
                </div>

                <div className="mb-4">
                    <p className="text-gray-500 text-sm">PROGRAM FEE</p>
                    <p className="text-blue-700 text-xl font-bold">₦840,000.00 <span
                        className="text-gray-500 line-through ml-2">₦1,200,000.00</span></p>
                </div>

                <Link className="mb-6" href={'/appFee'}>
                    <button
                        className="bg-blue-700 text-white w-full py-3 rounded-md hover:bg-blue-600">Apply
                        Now
                    </button>
                    <button className="text-blue-700 mt-2 w-full text-sm">View Application Process
                    </button>
                </Link>

                <div className="text-sm text-gray-500 mb-6">
                    <p> 2 Modules</p>
                    <p> 7 Months</p>
                    <p> 5,000 Enrolled</p>
                </div>

                <div className="flex items-center">
                    <p className="text-yellow-500 text-xl mr-2">★ 4.8</p>
                    <p className="text-sm text-gray-500">(98)</p>
                </div>
            </div>
        </div>

    );
};

export default FeeCard;
