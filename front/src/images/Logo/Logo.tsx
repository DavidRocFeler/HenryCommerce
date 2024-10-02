import Image from "next/image";
import styles from "./Logo.module.css"
import Link from "next/link";

const LogoJpg = () => {
    return(
        <div className={styles.DivLogo}>
            <Link href="/">
            <Image
                src="/Logo.png"
                alt="logo jpg"
                width={150}
                height={150}
            />
            </Link>
        </div>
    )
}

export default LogoJpg;