import React from "react";
import styles from "../styles/DashboardTime.module.css"

const DashboardTime = () => {
    return(
        <>
            <div className={styles.StatItem}>
                    <p>Browser</p>
                    <div className={styles.CircularChart}>
                        <svg viewBox="0 0 36 36">
                            <path className={styles.CircleBg}
                                  d="M18 2.0845
                                     a 15.9155 15.9155 0 0 1 0 31.831
                                     a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path className={styles.Circle}
                                  stroke-dasharray="50, 100"
                                  d="M18 2.0845
                                     a 15.9155 15.9155 0 0 1 0 31.831
                                     a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <h2>50%</h2>
                    </div>
            </div>
        </>
    )
}

export default DashboardTime;