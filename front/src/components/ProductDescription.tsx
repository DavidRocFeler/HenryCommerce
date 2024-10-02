import { IPropsCards } from "@/interface/types";
import React from "react";

const DescriptionProduct: React.FC<IPropsCards> = ({description}) => {
    return(
        <>
            <p> {description} </p>
        </>
    )
};

export default DescriptionProduct;