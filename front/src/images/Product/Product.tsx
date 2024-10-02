import { IPropsCards } from "@/interface/types";
import React from "react";
import styles from "./Product.module.css"

const ImageProduct: React.FC<IPropsCards> = ({image}) => {
    return(
        <>
            <img className={styles.ImageProduct} src={image} alt={image} />
        </>
    )
};

export default ImageProduct;