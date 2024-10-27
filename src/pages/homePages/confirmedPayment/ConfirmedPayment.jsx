import Link from "next/link";
import Navbar from "@/component/navbar/Navbar";
import Image from "next/image";
import PaymentImage  from "../../../asset/SuccessIcon.png";

const ConfirmedPayment = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            <Navbar />

            <div className="pb-6 flex flex-col items-center justify-center flex-1">
                <Image src={PaymentImage} alt={'payment'} className="text-green-500 text-6xl mb-4" />

                <h1 className="text-2xl font-semibold text-gray-800 text-center">
                    Payment Confirmed, check <br/>your Email
                </h1>
                <p className="text-gray-600 text-center mt-2">
                    Your payment has been confirmed, please check your email
                    <br />
                    for the cohort link or click the button below.
                </p>

                <Link href="/workspace">
                    <button className="bg-[#008eef] text-white p-3 rounded-md hover:bg-green-400">
                        Proceed to Workspace
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ConfirmedPayment;
