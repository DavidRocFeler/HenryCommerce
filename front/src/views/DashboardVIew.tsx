"use client"
import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css"
import ProfileComponent from "@/components/Profile";
import DashboardComponent from "@/components/DashboardComponent";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const DashboardView = () => {
    const router = useRouter();
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const session = localStorage.getItem('userSession');

        if (!session) {
            setIsLoading(true);
            setTimeout (() => {
                router.replace('/404'); 
            }, 3000);
        } else {
            setIsLoading(false);
        }
    }, []);
    
    if(isLoading) {
        return <Loading/>
    }

    return(
        <div className={styles.DivDashboard}>
            <ProfileComponent/>
            <DashboardComponent/>
        </div>
    )
}

export default DashboardView;