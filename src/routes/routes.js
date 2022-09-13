import express from "express";

import { ProductRoute } from "./ProductRoute.js";

const routes = express.Router();

routes.use("/products", ProductRoute);

export default routes;