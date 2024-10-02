import React from "react";
import Image from "next/image";
import styles from "./PayMedias.module.css"

const PaysMedias = () => {
    return(
        <>
            <Image 
                 src="/PaysMedias.png"
                 alt="PaysMedias"
                 className={styles.autoSizeImage} // Aplica la clase CSS
                 layout="responsive" // Ajusta el layout para que sea responsivo
                 width={100} // Especifica el ancho como proporción
                 height={100} // Especifica la altura como proporción
            />
        </>
    )
};

export default PaysMedias;