import express from "express";
import dotenv from "dotenv";

dotenv.config();

import ProductController from "../controllers/ProductController.js";
import { UploadImageMiddleware } from "../Middlewares/UploadImageMiddleware.js";

const ProductRoute = express.Router();

ProductRoute.get("/", ProductController.findAll);
ProductRoute.post("/", UploadImageMiddleware, ProductController.create);
ProductRoute.use("/uploads", express.static(process.env.DIR_PRODUCT_IMAGES_UPLOAD));

export { ProductRoute };
