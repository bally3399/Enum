'use client'
import Image from 'next/image'
import enum_logo from '@/asset/enumLogo.png'
import styles from '@/styles/index.module.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';


export default function Navbar({}){
    const getNumberOfNotification =0;
    const username='Oyindamola';
    const [isOpen, setOpen] = useState(false)
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <Image src={enum_logo} alt={''} width={25} height={15}/>
                <div>
                    <p>enum</p>
                </div>
            </div>
            <ul className={styles.navbarList}>
                <div className='relative flex items-center justify-center'>
                    <SearchIcon className="absolute left-3 text-gray-500" />
                    <input
                        type="text"
                        className="p-9 pl-12 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full md:w-[500px]"
                        placeholder="Search"
                    />
                </div>
            </ul>

            <div className={styles.navbarRightSide}>
                <Badge badgeContent={getNumberOfNotification}>
                    <NotificationsNoneIcon/>
                </Badge>
                <section>
                    <div>
                        <AccountCircleIcon/>
                        <div>{username}</div>
                        <div className={''} onClick={() => setOpen(!isOpen)}>{isOpen ? <ExpandMoreIcon/> :
                            <KeyboardArrowUpIcon/>}</div>
                    </div>
                </section>

            </div>
        </div>
    )
}