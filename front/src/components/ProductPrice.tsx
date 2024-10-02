import React from "react";

const PriceProduct: React.FC<{ price: number}> = ({price}) => {
    return(
        <>
            <p className="text-end"> $ {price}.00 </p>
        </>
    )
}

export default PriceProduct;