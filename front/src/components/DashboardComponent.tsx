import React from "react";
import styles from "../styles/DashboardContent.module.css"
import DashboardLinks from "./DashboardLinks";
import DashboardTime from "./DashboardTime";
import Link from "next/link";

const DashboardComponent = () =>{
    return(
        <>
            <section className={styles.MainContent}>
                <article className={styles.StatsGrid}>
                <DashboardLinks/>
                <DashboardTime/>
                </article>
                <article className={styles.FinancialSection}>
                    <div>
                        <h2>Finances</h2>
                        <p>$4,546,756</p>
                        <p>$7,465,854</p>
                        <p>$1,657,326</p>
                    </div>
                </article>
                <article className={styles.ChartArticle} >
                    <Link href="/dashboard/orders" className={styles.ChartSection} >
                        <p>Orders</p>
                    </Link>
                    <Link href="/blog" className={styles.ChartSection} >
                        <p> Blog</p>
                    </Link>
                </article>
            </section>
        </>
    )
}

export default DashboardComponent;