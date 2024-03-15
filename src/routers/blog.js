import express from "express";
import {
  addBlog,
  deleteBlog,
  getBlogByID,
  getBlogs,
  updateBlog,
} from "../controllers/blog";

const router = express.Router();

router.get(`/blogs`, getBlogs);

router.get(`/blogs/:id`, getBlogByID);

router.post(`/blogs`, addBlog);

router.put(`/blogs`, updateBlog);

router.delete(`/blogs`, deleteBlog);

export default router;
