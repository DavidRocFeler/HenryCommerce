import { IPropsCards } from "@/interface/types";
import React from "react";

const StockProduct: React.FC<IPropsCards> = ({stock}) => {
    return(
        <>
            <p> {stock}  </p>
        </>
    )
};

export default StockProduct;