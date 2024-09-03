// src/routes/productRoutes.ts

import express, { Request, Response } from "express";
const Products = require("../models/products");
const mongoose = require("mongoose");

const router = express.Router();

// Fetch all products
router.get("/products", async (req: Request, res: Response) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

// Add a new product
router.post("/products", async (req: Request, res: Response) => {
  try {
    const newProduct = new Products(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: "Error adding product", error });
  }
});

// Delete a product by ID
router.delete("/products/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Convert the ID to ObjectId

    const deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
});

router.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const updatedProduct = await Products.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
});

export default router;
