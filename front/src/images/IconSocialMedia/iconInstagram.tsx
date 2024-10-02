import React from "react";
import Image from "next/image";

const IconInstagram = () => {
    return(
        <>
            <Image 
            src="/logoInstagram.png"
            alt="IconInstagram"
            width={40}
            height={30}
            style={{marginRight: "0.5rem"}}
            />
        </>
    )
}

export default IconInstagram;