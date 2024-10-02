"use client"
import StoreView from "@/views/StoreVIew";
import React, { useEffect } from "react";

const Demo = () => {
    
    useEffect(() => {
        const session = localStorage.getItem("userSession");
        if(!session) {
            setTimeout(() => {
                window.location.href = "/404"
            },4000)
        }
    }, [])

    return(
        <>
            <StoreView/>
        </>
    )
};

export default Demo;