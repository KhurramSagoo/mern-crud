import express from "express";
import {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} from "../controllers/products.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/newproduct").post(createNewProduct);
router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

export default router;
