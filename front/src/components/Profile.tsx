import React from "react";
import styles from "../styles/Profiles.module.css"
import Link from "next/link";

const ProfileComponent = () => {
    return(
        <>  
             <Link href="/dashboard/profile" className={styles.mainContent}>
                <div className={styles.userProfile}>
                    <div className={styles.profilePicture}></div>
                    <div className={styles.userInfo}>
                        <h3>Lorem Ipsum</h3>
                        <p>User role or description</p>
                    </div>
                </div>
                <ul className={styles.sidebarMenu}>
                    <li>Lorem Ipsum</li>
                    <hr />
                    <li>Lorem Ipsum</li>
                    <hr />
                    <li>Lorem Ipsum</li>
                    <hr />
                </ul>
            </Link>
        </>
    )
}

export default ProfileComponent;