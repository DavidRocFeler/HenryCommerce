import React from "react";
import styles from "../styles/DashboardLinks.module.css"
import Link from "next/link";

const DashboardLinks = () => {
    return(
        <>
            <div className={styles.StatItemPurchased}>
                <p>Purchased</p>
                <h2>19%</h2>
            </div>
            <Link href="/carshop" className={styles.StatItem}>
                <p>Car shop</p>
                <h2>320</h2>
            </Link>
            <Link href="/wishlist" className={styles.StatItem}>
                <p>Wishlist</p>
                <h2>560</h2>
            </Link>
        </>
    )
}

export default DashboardLinks;