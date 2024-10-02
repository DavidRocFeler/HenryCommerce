import Card from "@/components/CardStore";
import { getProductByCategorieId } from "@/helpers/products.helpers";
import StoreView from "@/views/StoreVIew";
import React from "react";
import styles from "../../../styles/Category.module.css"
import ListCard from "@/components/ListCardStore";

const StoreCategory = async ({params}: {params: {storeId: string}}) => {
    const {storeId} = params;
    const products = await getProductByCategorieId(storeId)
    return(
        <div className="flex flex-col">
            <div className={styles.Category}> 
                {
                    products && 
                    products.map((product) => {
                        return(
                                <Card key={product.id}
                                    {...product}
                                />
                        )
                    })
                } 
            </div>
        </div>
    )
}

export default StoreCategory;

// const StoreCategory = () => {
//     return(
//         <>
//             categorias 
//         </>
//     )
// }

// export default StoreCategory;