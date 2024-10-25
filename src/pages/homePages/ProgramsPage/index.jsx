import { Programs } from "@/pages/homePages/programsPage/data";
import styles from '@/styles/index.module.css';
import Image from 'next/image';
import Link from "next/link";

const ProgramsPages = () => {
    return (
        <div className={styles.program}>
            {
                Programs.map(([image, Logo, title, price], index) => (
                    <Link key={index} className={'h-[300px] w-[550px]'} href={'/client'}>
                        <Image src={image} alt={'title'} width={'20px'} height={'20px'} className={'relative'}/>
                        <div className={'absolute w-full mt-[-40px]'}>
                            <Image src={Logo} alt={`${title} logo`} width={'2px'} height={'2px'} />
                            <h2>{title}</h2>
                            {typeof price === 'string' ? (
                                <p>{price}</p>
                            ) : (
                                <Image src={price} alt="price image" width={100} height={100} />
                            )}
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default ProgramsPages;
