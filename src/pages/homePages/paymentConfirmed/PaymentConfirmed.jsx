import Navbar from "@/component/navbar/Navbar";
import Image from "next/image";
import SuccessIcon from "../../../asset/SuccessIcon.png"
import Link from "next/link";
const PaymentConfirmed = () => {
    return(
        <div >
            <Navbar/>
            <div className={'pt-10 flex justify-center items-center'}>
                <Image src={SuccessIcon} alt={'success'}/>
            </div>
            <div className={'flex  pt-6 justify-center items-center'}>
                <h1><span className={'pl-28 pt-8 font-extrabold'}>Payment Confirmed, check</span>
                    <span className={'pl-44 block'}> your Email</span>
                    <span className={'pl-10 font-extralight'}>Your payment has been confirmed, please check your Email</span>
                    <span className={'pl-20 font-extralight block'}>for the Assessment link or click the button beow.</span>
                </h1>
            </div>
            <div className={'flex align-middle justify-center items-center pt-4'}>
                <Link href={'/assessmentClicked'}>
                    <button className="bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700">
                        Proceed to Assessment
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default PaymentConfirmed