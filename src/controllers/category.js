import Category from "../model/category";

export const getCategories = (req, res) => {
  console.log(req.query);
};

export const getCategoryByID = (req, res) => {
  console.log("getCategoryByID");
};

export const addCategory = async (req, res) => {
  try {
    const data = await Category(req.body).save();
    res.status(201).json(data);
  } catch (error) {}
};

export const deleteCategory = (req, res) => {
  console.log("deleteCategory");
};

export const updateCategory = (req, res) => {
  console.log("updateCategory");
};
