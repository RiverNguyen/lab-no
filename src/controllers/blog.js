import Blog from "../model/blog";

export const getBlogs = (req, res) => {
  console.log(req.query);
};

export const getBlogByID = (req, res) => {
  console.log("getBlogByID");
};

export const addBlog = async (req, res) => {
  try {
    const data = await Blog(req.body).save();
    res.status(201).json(data);
  } catch (error) {}
};

export const deleteBlog = (req, res) => {
  console.log("deleteBlog");
};

export const updateBlog = (req, res) => {
  console.log("updateBlog");
};
