import React from "react";
import Image from "next/image";

const IconX = () => {
    return(
        <>
            <Image 
            src="/logoX.png"
            alt="IconX"
            width={40}
            height={30}
            style={{marginRight: "0.5rem"}}
            />
        </>
    )
}

export default IconX;