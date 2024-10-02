"use client"
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const ProfileView = () => {
    const router = useRouter();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const session = localStorage.getItem('userSession');

        if (!session) {
            setIsLoading(true);
            setTimeout(() => {
                router.replace('/error'); 
            }, 3000)
        }
    }, [router]);

    if(isLoading)
        return <Loading/>

    return(
        <>
            this is my profile 
        </>
    )
}

export default ProfileView;