import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRouter.js";
import path from "path";
dotenv.config();

const app = express();
app.use(express.json()); //allows to accept Json to req.body

app.use("/products", productRouter);

const { PORT } = process.env || 5000;

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, (err) => {
  connectDB();
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
