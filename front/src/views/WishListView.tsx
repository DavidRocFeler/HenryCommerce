"use client"
import OrderCarWish from "../components/OrderCarWishComponent";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IProduct } from "@/interface/types";
import Loading from "@/components/Loading";

const WishListView = () => {
    const router = useRouter();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const session = localStorage.getItem('userSession');

        if (!session) {
            setIsLoading(true);
            setTimeout(() => {
                router.replace('/404'); 
            }, 3000)
        } else {
            setIsLoading(false);
        }
    }, []);
    
    if(isLoading)
        return <Loading/>

    return(
        <>
            <OrderCarWish products={products} viewType='wishListView'/>
        </>
    )
}

export default WishListView;