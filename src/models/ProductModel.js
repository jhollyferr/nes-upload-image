import { DataTypes } from "sequelize";
import { sequelize as connection } from "../database/config.js";

const ProductModel = connection.define("products", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export { ProductModel };
