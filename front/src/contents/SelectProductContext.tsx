"use client"
import React, { useEffect, useState, createContext, useContext } from "react"

export interface IProductContextType {
    categoryId: number | null; 
    setCategoryId: (id: number) => any;
}

export const ProductContext = createContext<IProductContextType>({
    categoryId: null,
    setCategoryId: () => {},
});

export interface ProductProviderProps {
    children: React.ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {
    const [categoryId, setCategoryId] = useState<number | null>(null); 

    useEffect(() => {
        if (typeof window !== "undefined" && window.sessionStorage) {
            const storedCategoryId = sessionStorage.getItem("categoryId");
            if (storedCategoryId) {
                setCategoryId(Number(storedCategoryId)); 
            }
        }
    }, []);

    return (
        <ProductContext.Provider value={{ categoryId, setCategoryId }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => useContext(ProductContext);
