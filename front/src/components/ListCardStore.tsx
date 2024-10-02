"use client"
import React from "react";
import Link from "next/link";
import Card from "./CardStore";
import { IListCardProps } from "@/interface/types";
import styles from "../styles/listCardOne.module.css"
import { useProductContext } from "@/contents/SelectProductContext";

const ListCard = ({
    title = "",
    linkUrl = "", 
    customStyle,
    filterId,
    disableLink,
    products,
}: IListCardProps & {customStyle?: React.CSSProperties} ) => {
   
    const { categoryId } = useProductContext();
    console.log(categoryId);
    return(
        <section style={customStyle} className="pb-[2rem] ">
            <div id={styles.infoProductUno} className="
            flex flex-row
            ">
                <h4> {title} </h4>
                { !disableLink && <Link href={linkUrl}> See more </Link>}
            </div>
            <div className="
            flex flex-row
            justify-evenly
            ">
                <div className={styles.GridContainer}>
                    {
                        products && 
                        products?.filter((product) => ( filterId ? product.categoryId === filterId : product.categoryId === categoryId))
                        .map((product) => {
                            return(
                                <Card
                                key={product.id}
                                {...product}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ListCard;