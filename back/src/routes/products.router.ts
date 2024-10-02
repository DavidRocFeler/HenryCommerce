import { Router } from "express";
import { getProductByCategoryId, getProducts } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/:categoryId", getProductByCategoryId)

export default router;
