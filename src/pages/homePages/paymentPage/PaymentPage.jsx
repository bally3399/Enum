import Navbar from "@/component/navbar/Navbar";
import {HiArrowLeft} from "react-icons/hi";
import Image from "next/image"
import image1 from "../../../asset/image1.png"
import payStackLogo from "../../../asset/paystackImg.png"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import Link from "next/link";

const PaymentPage =() =>{
    return(
        <div className={'bg-white'}>
            <Navbar className="pb-6"/>
            <div className=" m-3 absolute pl-20 pt-8 left-3 top-16">
                <button
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2"/> Back
                </button>
            </div>
            <div className="flex pt-8">
                <div className={'w-[70%] border-r-2'}>
                    <div className={'pl-28 pt-16'}>
                        <h1 className={'font-bold'}>Make Payment</h1>
                        <p className={'pt-6'}>Details</p>
                    </div>
                    <div className={'pl-28 pt-16 flex  gap-12'}>
                        <Image className={'w-[200px]'} src={image1} alt={'image'}/>
                        <h1 className={'pt-6 font-bold'}>Business Leadership - Application Fee
                            <span className={'block font-semibold'}>by Semicolon Africa</span>
                        </h1>
                        <p className={'text-[#1095f0] pt-6'}>₦10,000</p>
                    </div>
                    <div className="p-4 pl-28 pt-6">
                        <div className="mb-4">
                            <p className="uppercase">Select Payment Gateway</p>
                        </div>

                        <div className="flex space-x-4 mb-4">
                            <div className="flex items-center border-2 border-blue-500 p-3 rounded-lg">
                                <Image src={payStackLogo} alt="Paystack" className="mr-2"/>
                            </div>
                            <button className="flex items-center border p-3 rounded-lg">
                                <CreditCardIcon/>
                                <span className="mr-2"></span> Debit Card
                            </button>
                            <button className="flex items-center border p-3 rounded-lg">
                                <CreditCardIcon/>
                                <span className="mr-2"></span> Bank Transfer
                            </button>
                        </div>
                        <div className={'flex justify-between'}>
                            <p className="text-sm text-gray-500 mb-4">
                                In order to complete your transaction, we will transfer you over
                                <span className={'block'}>to the selected payment
                                gateway secure servers.</span>
                            </p>

                            <div className="flex gap-3 pb-4 items-center text-sm text-gray-500">
                                <LockIcon/>
                                <p>Secure<span className={'block'}>Connection</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="p-6 border-r-4 bg-blue-50 w-[30%] m-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-2">Summary</h2>

                    <p className="text-blue-700 font-medium mb-4">Business Leadership Application Fee</p>

                    <div className="text-gray-600 text-sm mb-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₦12,000</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Coupon discounts</span>
                            <span>-₦2,000</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-lg font-bold text-blue-700 mb-4">
                        <span>Total</span>
                        <span>₦10,000</span>
                    </div>

                    <p className="text-xs text-gray-500 mb-4">
                        Enum is required by law to collect applicable transaction taxes.
                    </p>

                    <Link href={''}>
                        <button className="bg-blue-600 text-white py-3 w-full rounded-md hover:bg-blue-700">
                            Make Payment
                        </button>
                    </Link>

                    <p className="text-xs text-gray-500 mt-4">
                        By completing your purchase you agree to these <span
                        className="text-blue-500 underline cursor-pointer">Terms of Service</span>.
                    </p>
                </div>

            </div>

        </div>
    )
}
export default PaymentPage