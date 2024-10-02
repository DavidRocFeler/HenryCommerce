import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};

export const getProductByCategorieIdService = async ( categoryId: number ): Promise<Product> => {
  const productById = await ProductRepository.findOneBy({id: categoryId});
  if(!productById) throw new Error("Product by category not found")
    return productById;
};
