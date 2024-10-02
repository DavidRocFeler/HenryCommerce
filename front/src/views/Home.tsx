import ListCard from "@/components/ListCardStore"
import { getProductDB } from "@/helpers/products.helpers"

export const HomeView = async () => {
    const products = await getProductDB();
    return(
        <>
            <ListCard products={products} title="Featured Smarh Phone" customStyle={{background: "#F6F6F6", paddingTop: "0.2rem"}}  filterId={1} linkUrl="/store/1" />
            <ListCard products={products}  title="Featured Tablets" customStyle={{background: "white"}} filterId={3} linkUrl="/store/3" />
            <ListCard products={products}  title="Featured Laptops" customStyle={{background: "#F6F6F6", paddingTop: "0.2rem"}}  filterId={2} linkUrl="/store/1" />
            <ListCard products={products}  title="Featured Smart Watch" customStyle={{background: "white"}} filterId={4} linkUrl="/store/3" />
            <ListCard products={products}  title="Featured Accesories" customStyle={{background: "#F6F6F6", paddingTop: "0.2rem"}}   filterId={5} linkUrl="/store/5" />
        </>
    )   
}