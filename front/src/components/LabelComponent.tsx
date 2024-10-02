import React from "react";
import styles from "../styles/LabelComponent.module.css";
import ImageProduct from "@/images/Product/Product";
import Accountant from "./Accountant";
import PriceProduct from "./ProductPrice";
import TitleProduct from "./ProductTitle";
import StockProduct from "./ProductStock";
import { IProduct } from "@/interface/types";
import OrderStatus from "./OrderStatus";
import OrderDate from "./OrderDate";

interface LabelComponentProps {
  product?: IProduct;
  units: number;
  viewType: 'carShop' | 'ordersView' | 'wishListView';
  orderStatus?: { status: string; date: string }; // Nuevo prop para OrdersView
}

const LabelComponent: React.FC<LabelComponentProps> = ({ product, units, viewType, orderStatus }) => {
    const totalPrice = product ? product.price * units: 0;

    return (
        <div className={styles.Label}>
            <figure className={styles.ImageIcon}>
                {product && <ImageProduct {...product} />}
            </figure>
            <div className={styles.Extrainfo}>
                {product && <TitleProduct {...product} />}
                {viewType !== 'ordersView' && (
                    <div className="flex flex-row">
                        <p className="mr-2">In Stock:</p>
                        {product && <StockProduct {...product} />}
                    </div>
                )}
                <div className="flex flex-row">
                    <p className="mr-2">Units: {units}</p> 
                </div>
                {viewType === 'carShop' && <Accountant product={product} viewType={viewType} />}
                {viewType === 'wishListView' && <Accountant product={product} viewType={viewType}  />}
                {viewType === 'ordersView' && orderStatus && <OrderStatus {...orderStatus} />}
            </div>
            <div className={styles.Price}>
                {product && <PriceProduct price={totalPrice} />}
                {viewType === 'ordersView' && orderStatus && <OrderDate {...orderStatus} />}
            </div>
        </div>
    );
};

export default LabelComponent;