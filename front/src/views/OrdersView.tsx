"use client"
import OrderCarWish from "@/components/OrderCarWishComponent";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getOrder } from "@/helpers/orders.helper";
import { IOrder, IUserSession } from "@/interface/types";
import Loading from "@/components/Loading";

const OrdersView = () => {
    const router = useRouter();
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [userData, setUserData] = useState<IUserSession>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const session = localStorage.getItem('userSession');
        if (!session) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                router.replace('/404');
            }, 3000);
            return () => clearTimeout(timer);
        }
        setUserData(JSON.parse(session));
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (userData?.user.name) {
            fetchData();
        }
    }, [userData?.user]);

    const fetchData = async () => {
        if (userData?.token) {
            setIsLoading(true);
            try {
                const orderResponse = await getOrder(userData.token);
                setOrders(orderResponse);
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setIsLoading(false);
            }
        }
    }

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div>
            {orders && orders.length > 0 ? (
                orders.map((order: IOrder) => (
                    <div key={order.id}>
                        <OrderCarWish 
                            order={order}
                            viewType="ordersView"
                        />
                    </div>
                ))
            ) : (
                <p>You don't have any orders</p>
            )}
        </div>
    );
};

export default OrdersView;