"use client"
import React from "react";
import styles from "../styles/ProductDetail.module.css"
import ImageProduct from "@/images/Product/Product";
import TitleProduct from "./ProductTitle";
import DescriptionProduct from "./ProductDescription";
import WishlistButton from "./WishlistButton";
import Swal from "sweetalert2";
import PriceProduct from "./ProductPrice";
import StockProduct from "./ProductStock";
import { useState, useEffect, useRef } from "react";
import LoginComponent from "./Loggin";
import { useRouter } from "next/navigation";
import { useProductContext } from "@/contents/SelectProductContext";

const ProductDetail: React.FC = () => {
    const router = useRouter();
    const { setCategoryId } = useProductContext();
    const [product, setProduct] = useState<any>(null);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [userSession, setUserSession] = useState<boolean>(false); 
    const loginRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
        const storedProduct = sessionStorage.getItem("selectedProduct");
        if (storedProduct) {
            const productData = JSON.parse(storedProduct);
            setProduct(productData);
            setCategoryId(Number(productData.categoryId))
        } else {
            console.error("No product found in sessionStorage");
        }
    }, []);

    const handleAddToCart = () => {
        console.log("button clicked")
        const userSession = localStorage.getItem("userSession");
        if (!userSession) {
            setShowLogin(true);
        } else {
            const storedProduct = sessionStorage.getItem("selectedProduct");
            if (storedProduct) {
                const productData = JSON.parse(storedProduct); 
                
                const existingProducts = JSON.parse(localStorage.getItem("cartProduct") || "[]");
    
                if (!Array.isArray(existingProducts)) {
                    console.error("Existing products is not an array:", existingProducts);
                    return; 
                }
    
                existingProducts.push(productData);
    
                localStorage.setItem("cartProduct", JSON.stringify(existingProducts));
                
                Swal.fire({
                    icon: "success",
                    title: "Product added to cart!",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    router.push("/carshop");
                });
            }
        }
    };    
    
    const updateUserSession = () => {
        const session = localStorage.getItem("userSession");
        setUserSession(!!session);
    };
    
    const handleLoginSuccess = () => {
        updateUserSession(); 
        setShowLogin(false); 
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };
 
    return(
        <div className="md:flex flex-row justify-evenly pt-[2rem] pb-[2rem] ">
            <div className="flex flex-row">
                <figure className={styles.MainPicture}>
                    {
                        product ? (
                            <ImageProduct key={product.id} {...product}/>
                        ) : (
                            <p> Not found </p>
                        )
                    }
                </figure>
                <figure className={styles.WrapPicture}>

                </figure>
            </div>
            <div className="flex flex-col md:w-[60%] p-[2rem] border-[2px] border-[#FFEE58] ">
                <div className={styles.Title}>
                    {
                        product ? (
                            <TitleProduct key={product.id} {...product} />
                        ) : (
                            <p> Title not found </p>
                        )
                    }
                </div>
                <div className={styles.Start}></div>
                <div className="flex flex-ro justify-evenly w-[100%] mb-[1rem] ">
                    <div className={styles.ShopyLeft}>
                        <div className={styles.Price}>
                            <div className={styles.UnityProduct}>
                                <p> Price: </p>
                            </div>
                            <div>
                                {
                                    product ? (
                                        <PriceProduct key={product.id} {...product} />
                                    ) : (
                                        <p> price not found </p>
                                    )
                                }
                            </div>
                        </div>
                        <button onClick={handleAddToCart} className={styles.Carshop}>
                            Add to carshop
                        </button>
                    </div>
                    <div className={styles.ShopyRight}>
                        <div className={styles.Stock} >
                            {
                                product ? (
                                    <div className="flex flex-row">
                                        <p className="mr-2"> Stock: </p>
                                        <StockProduct key={product.id} {...product} />
                                    </div>
                                ) : (
                                    <p> not foud </p>
                                )
                            }
                        </div>                     
                        <div className={styles.Wishlist}>
                            <WishlistButton/>
                        </div>                                           
                    </div>
                </div>
                <figure className={styles.IconShop} ></figure>
                <article className={styles.Description}>
                    {
                        product ? (
                            <DescriptionProduct key={product.id} {...product} />
                        ) : (
                            <p> Description not found </p>
                        )
                    }
                </article>
            </div>
            {showLogin && (
                <div ref={loginRef} className={styles.loginOverlay}>
                    <LoginComponent onClose={handleCloseLogin} onSuccess={handleLoginSuccess}  />
                </div>
            )}
        </div>
    )
}

export default ProductDetail;