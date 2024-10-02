import { IProduct } from "@/interface/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function getProductDB(): Promise<IProduct[]> {
    try {
        const res = await fetch(`${APIURL}/products`, {
            next: { revalidate: 1200}
        })
        const products: IProduct[] = await res.json();
        return products;
    } catch (error: any) {
        throw Error(error)
    }
}

export async function getProductByCategorieId(categoryId: string): Promise<IProduct[]> {
    try {
        const product: IProduct[] = await getProductDB();
        const productFiltered = product.filter((product) => product.categoryId.toString() === categoryId);
        if(!productFiltered.length) throw new Error("Product by id not found")
            return productFiltered;
    } catch (error: any) {
        throw new Error(error)
    }
};