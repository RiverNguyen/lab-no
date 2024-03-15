import express from "express";
import {
  addProduct,
  deleteProduct,
  getProductByID,
  getProducts,
  updateProduct,
} from "../controllers/product";

const router = express.Router();

router.get(`/products`, getProducts);

router.get(`/products/:id`, getProductByID);

router.post(`/products`, addProduct);

router.put(`/products`, updateProduct);

router.delete(`/products`, deleteProduct);

export default router;
