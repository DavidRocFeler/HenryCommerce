import React from "react";
import styles from "../styles/demo.module.css";
import ResumeShopComponent from "@/components/ResumeShopComponent";
import LabelComponent from "@/components/LabelComponent";
import { IOrder, IProduct } from "@/interface/types";

export interface OrderCarWishProps {
    order?: IOrder;
    products?: IProduct[];
    viewType: 'carShop' | 'ordersView' | 'wishListView';
}

const OrderCarWish: React.FC<OrderCarWishProps> = ({ order, products, viewType }) => {
    const productMap: { [key: number]: { product: IProduct; units: number } } = {};

    const itemsToRender = order?.products || products || [];

    // Modificamos este if para renderizar los componentes vacíos
    if (itemsToRender.length === 0) {
        return (
            <div className={styles.MainContent}>
                <div className={styles.LabelContent}>
                    <LabelComponent 
                        product={undefined} // Pasamos undefined como producto
                        units={0} 
                        viewType={viewType}
                        orderStatus={undefined}
                    />
                    <hr />
                </div>
                <ResumeShopComponent products={[]} /> {/* Pasamos productos vacíos */}
            </div>
        );
    }

    // Mapeamos los productos solo si hay items en `itemsToRender`
    itemsToRender.forEach((product) => {
        if (productMap[product.id]) {
            productMap[product.id].units += 1;
        } else {
            productMap[product.id] = { product, units: 1 };
        }
    });

    return (
        <div className={styles.MainContent}>
            <div className={styles.LabelContent}>
                {Object.values(productMap).map(({ product, units }) => (
                    <React.Fragment key={product.id}>
                        <LabelComponent 
                            product={product} 
                            units={units} 
                            viewType={viewType}
                            orderStatus={viewType === 'ordersView' && order ? {
                                status: order.status,
                                date: new Date(order.date).toDateString()
                            } : undefined}
                        />
                        <hr />
                    </React.Fragment>
                ))}
            </div>
            <ResumeShopComponent products={itemsToRender} />
        </div>
    );
};

export default OrderCarWish;
