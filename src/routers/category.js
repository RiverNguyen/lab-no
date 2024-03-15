import express from "express";
import {
  addCategory,
  deleteCategory,
  getCategories,
  getCategoryByID,
  updateCategory,
} from "../controllers/category";

const router = express.Router();

router.get(`/categories`, getCategories);

router.get(`/categories/:id`, getCategoryByID);

router.post(`/categories`, addCategory);

router.put(`/categories`, updateCategory);

router.delete(`/categories`, deleteCategory);

export default router;
