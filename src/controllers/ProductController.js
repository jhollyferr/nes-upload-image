import { ProductModel } from "../models/ProductModel.js";

class ProductController {
  async findAll(request, response) {
    try {
      const products = await ProductModel.findAll();

      return response.status(200).json(products);
    } catch (error) {
      return response.status(500).json({
        message: "Erro ao buscar produtos",
        error,
      });
    }
  }

  async create(request, response) {
    try {
      const { name, price } = request.body;
      const { path, filename } = request.file;

      if (!path) throw new Error("Image not found");

      if ([name, price].includes(""))
        throw new Error("Name or Price not found");

      const product = await ProductModel.create({
        name,
        price,
        image: filename,
      });

      return response.status(201).json({product});
   
    } catch (error) {
      return response.status(500).json({
        message: "Erro ao criar produto",
        error: error.message,
      });
    }
  }
}

export default new ProductController();
