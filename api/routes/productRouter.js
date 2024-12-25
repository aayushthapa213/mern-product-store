import { Router } from "express";
import productController from "../controllers/productController.js";

const productRouter = Router();

productRouter.get("/", productController.displayProduct);

productRouter.post("/", productController.addProduct);

productRouter.put("/:id", productController.updateProduct);

productRouter.delete("/:id", productController.deleteProduct);

export default productRouter;
