import Card from "@/components/CardStore";
import React from "react";
import styles from "../styles/Store.module.css"
import { getProductDB } from "@/helpers/products.helpers";

const StoreView = async () => {
    const products = await getProductDB();
    return(
        <div className={styles.Store}>
            {
                products && products?.map((product) => {
                    return(
                        <Card
                        key={product.id}
                        {...product}
                        />
                    )
                })
            }
        </div>
    )
};

export default StoreView;