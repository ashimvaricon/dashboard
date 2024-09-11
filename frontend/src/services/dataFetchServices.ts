import axios from "axios";
import { Person } from "../interfaces/product";
import axiosInstance from "../config/axiosInstance";

export const fetchProducts = async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  return response.data;
};

export const addSupplier = async (supplierData: {
  productsName: string;
  category: string;
  brand: string;
  price: string;
}) => {
  const response = await axiosInstance.post("/products", supplierData);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        `Failed to delete the product: ${error.response.status} ${error.response.statusText}`
      );
    }
    throw new Error("Failed to delete the product");
  }
};

export const updateProduct = async (product: Person) => {
  try {
    const response = await axiosInstance.put(
      `/products/${product._id}`,
      product
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        `Failed to update the product: ${error.response.status} ${error.response.statusText}`
      );
    }
    throw new Error("Failed to update the product");
  }
};
