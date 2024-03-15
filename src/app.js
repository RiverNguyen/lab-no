import express from "express";
import productRouter from "./routers/product";
import { connectDB } from "./config/db";
import dotevn from "dotenv";
import categoryRouter from "./routers/category";
import blogRouter from "./routers/blog";

dotevn.config();
const app = express();

//* middleware
app.use(express.json());

//* connect DB
connectDB(process.env.DB_URI);

//* router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", blogRouter);

export const viteNodeApp = app;
