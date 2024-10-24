import React from 'react';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import henleyLogo from '../../asset/henleyLogo.png';

const PartnerCarousel = () => {
    return (
        <div>
            <div className="flex shadow-md w-full text-black items-center pt-6 bg-white pl-14 justify-evenly">
                <span>Partners:</span>
                <ArrowBackIosIcon className="mx-2" />
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center">
                        <Image src={henleyLogo} alt='Henley Business School Logo' />
                        <span>Henley Business School</span>
                    </div>
                ))}
                <ArrowForwardIosIcon className="mx-2" />
            </div>
        </div>
    );
};

export default PartnerCarousel;
