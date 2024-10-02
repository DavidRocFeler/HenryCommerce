import React from "react";
import AllDetail from "@/views/AllDetailView";

const DetailProduct: React.FC<{params: {productId: string}}> = ({params}) => {
    console.log(params.productId)
    return(
        <>
            <AllDetail/>
        </>
    )
}

export default DetailProduct;