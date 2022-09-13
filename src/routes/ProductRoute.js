import express from "express";

import ProductController from "../controllers/ProductController.js";
import { UploadImageMiddleware } from "../Middlewares/UploadImageMiddleware.js";

const ProductRoute = express.Router();

ProductRoute.get("/", ProductController.findAll);
ProductRoute.post("/", UploadImageMiddleware, ProductController.create)

export { ProductRoute };
