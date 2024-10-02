"use client"
import { IProduct } from "@/interface/types";
import React from "react";
import styles from "../styles/CardStore.module.css"
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const Card: React.FC<IProduct> = ({id, name, price, description, categoryId, image, stock}) => {
    const router = useRouter();
    const handleButtonProduct = () => {
        // Guardar las propiedades del producto en sessionStorage
        const product = { id, name, price, description, stock, image, categoryId };
        sessionStorage.setItem("selectedProduct", JSON.stringify(product));

        //guardar category por separado
        sessionStorage.setItem("categoryId", categoryId.toString());

        // Redirigir a la página del producto con el id
        router.push(`/product/${id}`);
    }

    return(
        <div className={styles.CardList}>
            <button onClick={handleButtonProduct}>
                <img className={styles.Image} src={image} alt="Product image" />
            </button>
            <>
                <h1> {name} </h1>
                <p> stock: {stock} </p>
                <p> price: ${price} </p>
            </>
            <button className={styles.ButtonCar}>
            <ShoppingCart className="
            "/>
            </button>
        </div>
    )
}

export default Card;