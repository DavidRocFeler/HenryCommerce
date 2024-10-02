import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductByCategorieIdService, getProductsService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductByCategoryId = catchedController(
  async (
    req: Request<{categoryId: String}>, 
    res: Response
  ) => {
    const { categoryId } = req.params;
    const productByCategory = await getProductByCategorieIdService(Number(categoryId))
    res.json(productByCategory)
  }
)