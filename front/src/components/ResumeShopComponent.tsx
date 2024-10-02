import React, { useEffect, useState } from "react";
import styles from "../styles/ResumeShop.module.css";
import PriceProduct from "./ProductPrice";
import { IProduct, IUserSession } from "@/interface/types";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ButtonCar from "./ButtonCar";

const ResumeShopComponent: React.FC<{ products: IProduct[] }> = ({ products }) => {
 
    const subtotal = products.reduce((acc, product) => acc + product.price, 0);
    const [ cart, setCart ] = useState<IProduct[]>([]);
    const [ totalCart, setTotalCart ] = useState<number>(0)
    const [ userData, setUserData ] = useState<IUserSession>();
    const router = useRouter();
    const pathname = usePathname(); 

    useEffect(() => {
        if(typeof window !== "undefined" && window.localStorage) {
            const storedCart = JSON.parse(localStorage.getItem("cartProduct") || "[]")
            if(storedCart) {
                let totalCart = 0; 
                storedCart?.map((item: IProduct) => {
                    totalCart = totalCart + item.price
                })
                setTotalCart(totalCart);
                setCart(storedCart);
            }
        }
    }, [])

    useEffect(() => {
        if(typeof window !== "undefined" && window.localStorage) {
            const userData = JSON.parse(localStorage.getItem("userSession")!)
            setUserData(userData);
        }
    }, [])
    
    const subtotalProduct: IProduct = {
        id: -1, 
        name: "Subtotal",
        description: "", 
        image: "", 
        price: subtotal,
        categoryId: 0, 
        stock: 0, 
    };

    const isCarShop = pathname === "/carshop";

    return (
        <div className={styles.Resumen}>
            <h1 className="">Resume</h1>
            <div className={styles.SubTotal}>
                <h2>Subtotal</h2>
                <PriceProduct {...subtotalProduct} />
            </div>
            <div className={styles.Total}>
                <h2>Total</h2>
                <PriceProduct {...subtotalProduct} />
            </div>
            <div className={styles.Description}>
                Lorem ipsum Lorem ipsum Lorem ipsum
            </div>
            {isCarShop && (
                <ButtonCar viewType="carShop" product={undefined} units={0} orderStatus={undefined} />
            )}
        </div>
    );
};

export default ResumeShopComponent;
