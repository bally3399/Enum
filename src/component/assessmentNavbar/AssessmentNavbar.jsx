import styles from "@/styles/index.module.css";
import Image from "next/image";
import enum_logo from "@/asset/enumLogo.png";
import Button from "@/component/button/Button";

const AssessmentNavbar =()=>{
    return(
        <div>
            <div className={styles.navbarLogo}>
                <Image src={enum_logo} alt={''} width={25} height={15}/>
                <div>
                    <p>enum</p>
                </div>
                <Button>
                    cancel
                </Button>
            </div>
        </div>
    )
}
export default AssessmentNavbar