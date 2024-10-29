import {HiArrowLeft} from "react-icons/hi";
import Image from "next/image";
import rectangle from "@/asset/Rectangle.png";
import colouredShapes from "@/asset/shapes.png";
import letterA from "@/asset/letterA.png";
import Button from "@/component/button/Button";
import letterB from "@/asset/letterB.png";
import letterC from "@/asset/letterC.png";
import letterD from "@/asset/letterD.png";
import Link from "next/link";

const Assessment = () =>{
    return (
        <div>
            <div className={'mx-[200px] w-[80%] mb-10'}>
                <div className="pl-[45px] pt-4">
                    <button className="flex items-center text-black hover:underline">
                        <HiArrowLeft className="mr-2"/> Back
                    </button>
                </div>
                <div>
                    <div className={'text-black flex justify-between'}>
                        <div>
                            <p className={'pt-4 h-[31px] w-[527px] font-[600] text-[20px]  leading-[31.2px] tracking-[-2]'}>Best
                                In Beauty Quiz</p>
                            <div className="relative my-[50px]">
                                <Image src={rectangle} alt="Rectangle" className="relative w-full h-auto"/>
                                <div
                                    className="border border-b-blue-500 absolute inset-0 bg-gradient-to-b from-[#008EEF] to-transparent h-[60%]"></div>
                            </div>
                            <p className={'text-[#6E7EA8] h-[28px] w-[151px] text-[14px] font-[400] leading-[28px]'}>4
                                Questions · 5 mins</p>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <div className={'text-black w-[440px] h-[380px]'}>
                            <p className={'text-black w-[440px] h-[20px] my-3'}>How many sides does the yellow polygon
                                have?</p>
                            <Image src={colouredShapes} alt={'colouredShapes'} className={'w-[300px] h-[300px]'}/>
                        </div>


                        <div className={'ml-10 mt-[45px] w-full text-black'}>
                            <div className='flex p-3 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterA} alt={'letterA'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'4'}
                                        className='w-[32px ] h-[18px]font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex p-2   pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterB} alt={'letterA'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'6'}
                                         className='w-[32px ] h-h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex p-2   pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterC} alt={'letterC'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'12'}
                                        className='w-[32px ] h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <div className='flex gap-3  p-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterD} alt={'letterD'} className={'w-[24px] h-[24px] ml-2 text-black'}/>
                                <Button word={'8'}
                                        className='w-[32px ] h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>

                            <Link
                                className='flex gap-2  p-2 pl-0 text-white bg-[#008EEF] justify-center rounded-lg border-2 mt-[45px]' href={'/submitted'}>
                                <Button word={'Next'}
                                        className='w-[32px ] h-[24px] font-[400] text-[14px] leading-[24px]'/>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Assessment