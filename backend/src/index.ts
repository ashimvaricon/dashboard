// src/index.ts

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productsRoute";
const cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Define a route
app.use("/api", productRoutes);

mongoose.connect(
  "mongodb+srv://ashim1998poudyal:ashimbarca98@cluster0.nyoeyu4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to mongodb");
});
mongoose.connection.on("error", () => {
  console.log("Not connected to mongodb");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
