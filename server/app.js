import express from "express";
import { config } from "dotenv";
import router from "./routes/products.js";
import cors from "cors";

const app = express();

if (process.env.NODE_ENV !== "production") {
  config({ path: "./config/config.env" });
}

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importing routes
app.use("/api/v1", router);

export default app;
