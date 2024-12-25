import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRouter.js";
dotenv.config();

const app = express();
app.use(express.json()); //allows to accept Json to req.body

app.use("/products", productRouter);

const { PORT } = process.env || 5000;

app.listen( PORT, (err) => {
  connectDB();
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
