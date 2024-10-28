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
            <div className={styles.navbarList}>
                <div
                    className="flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-gray-500 focus-within:border-gray-500 px-2 w-full md:w-[500px]">
                    <SearchIcon className="text-gray-500 mr-2"/>
                    <input
                        type="text"
                        className="outline-none bg-transparent w-full px-2 py-1 rounded-lg placeholder-gray-500"
                        placeholder="Search"
                    />
                </div>
            </div>


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