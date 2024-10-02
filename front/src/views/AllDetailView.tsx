import React from "react";
import ListCard from "@/components/ListCardStore";
import ProductDetail from "@/components/ProductDetail";
import { IProduct } from "@/interface/types";
import { getProductDB } from "@/helpers/products.helpers";

const AllDetail: React.FC= async () => {
    const products: IProduct[] = await getProductDB();

    return(
        <>
            <ProductDetail/>            
            <ListCard 
            products={products}
            customStyle={{background: "#F6F6F6", paddingTop: "0.1rem"}}   
            disableLink={true}
            />
        </>
    )
}

export default AllDetail;