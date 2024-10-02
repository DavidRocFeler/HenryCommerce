import { IPropsCards } from "@/interface/types";
import React from "react";

const TitleProduct: React.FC<IPropsCards> = ({name}) => {
    return(
        <>
            <h1> {name} </h1>
        </>
    )
};

export default TitleProduct;