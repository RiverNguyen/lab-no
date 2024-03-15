import Product from "../model/product";

export const getProducts = (req, res) => {
  console.log(req.query);
};

export const getProductByID = (req, res) => {
  console.log("getProductByID");
};

export const addProduct = async (req, res) => {
  try {
    const data = await Product(req.body).save();
    res.status(201).json(data);
  } catch (error) {}
};

export const deleteProduct = (req, res) => {
  console.log("deleteProduct");
};

export const updateProduct = (req, res) => {
  console.log("updateProduct");
};
