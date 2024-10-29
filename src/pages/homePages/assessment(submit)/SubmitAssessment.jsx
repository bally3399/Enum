'use client'
import React from 'react';
import Button from "@/component/button/Button";
import Image from 'next/image';
import letterA from '../../../asset/letterA.png';
import letterB from '../../../asset/letterB.png';
import letterC from '../../../asset/letterC.png';
import letterD from '../../../asset/letterD.png';
import submitAssessmentImage from "../../../asset/submitAssessmentImage.png";
import timeImage from '../../../asset/clock.png';
import {HiArrowLeft} from "react-icons/hi";
import {Icon} from "@mui/material";
import AssessmentNavbar from "@/component/assessmentNavbar/AssessmentNavbar";
import Link from "next/link";

const SubmitAssessment = () =>{
    return(
        <div>
            <AssessmentNavbar/>
            <div className={'mx-[200px] mb-5'}>
                <div className="pl-[45px] pt-4">
                    <button className="flex items-center text-black hover:underline">
                        <HiArrowLeft className="mr-2"/> Back
                    </button>
                </div>

                <div className="relative flex items-center pt-[100px]">
                    <div className="absolute  flex items-center top-[3px] left-[763px] transform -translate-x-1/2">
                        <Image src={timeImage} alt="timeImage" className="w-[30px] h-[20px] text-black"/>
                        <div
                            className="flex flex-col items-center text-black font-[500] text-[14px] leading-[18px] tracking-[2%] gap-2 py-1 ml-3">
                            <h1 className="text-blue-500">Hide</h1>
                            <p>09:52</p>
                        </div>
                    </div>
                    <div className="absolute flex items-center top-[15px] left-[760px] transform -translate-x-1/2">
                        <div className="flex text-white">
                            {/*<Icon icon={'mdi-light:clock'}/>*/}
                            <div className="flex-col ml-2">
                                <p className="text-[10px]">Time Left</p>
                                <p>09:52</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className={'border border-blue-500  mb-5'}></p>


                <div>
                    <div className={'text-black flex justify-between'}>
                        <div>
                            <p className={'h-[31px] w-[527px] font-[600] text-[20px] leading-[31.2px] tracking-[-2]'}>Business
                                Management Application Assessment</p>
                            <p className={'text-[#6E7EA8] h-[28px] w-[151px] text-[14px] font-[400] leading-[28px]'}>4
                                Questions · 5 mins</p>
                        </div>
                        <p className={'text-[12px]  font-[500] leading-[15.62px] tracking-[10%]'}>TOTAL UNANSWERED:
                            1</p>
                    </div>
                    <div className={'flex'}>
                        <div className={'text-black   h-[380px] w-[50%]'}>
                            <p className={'text-black w-[440px] h-[20px] my-6'}>Which of the following best describes
                                the art below?</p>
                            <Image src={submitAssessmentImage} alt={'clouredShapes'} className={'w-[300px] h-[300px]'}/>
                        </div>
                        <div className={'ml-10 w-[50%] mt-[45px] text-black'}>
                            <div className='flex p-2 gap-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterA} alt={'letterA'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'Art installation '}
                                        className='w-[32px ] h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>
                            <div className='flex p-2 gap-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterB} alt={'letterA'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'Photography'}
                                        className='w-[32px ] h-h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>
                            <div className='flex p-2 gap-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterC} alt={'letterC'} className={'w-[24px] ml-2 h-[24px] text-black'}/>
                                <Button word={'Painting'}
                                        className='w-[32px ] h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>
                            <div className='flex gap-2 p-2 pl-0 text-black rounded-lg border-2 mb-3'>
                                <Image src={letterD} alt={'letterD'} className={'w-[24px] h-[24px] ml-2 text-black'}/>
                                <Button word={'Sculpture'}
                                        className='w-[32px ] h-[18px] font-[400] text-[14px] leading-[24px]'/>
                            </div>
                            <div className={'flex gap-5'}>
                                <div
                                    className='flex gap-2 w-[50%] p-2 pl-0 text-white bg-white justify-center rounded-lg border border-blue-500 mt-[45px]'>
                                    <Button word={'Previous '}
                                            className='w-[32px] text-blue-500 h-[24px] font-[400] text-[14px] leading-[24px]'/>
                                </div>
                                <Link
                                    className='flex gap-2 w-[50%] p-2 pl-0 text-white bg-[#008EEF] justify-center rounded-lg border-2 mt-[45px]' href={'/submitAssessment'}>
                                    <Button word={'Next '}
                                            className='w-[32px ] h-[24px] font-[400] text-[14px] leading-[24px]'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubmitAssessment