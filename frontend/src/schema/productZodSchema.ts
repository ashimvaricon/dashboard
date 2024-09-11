import { z } from "zod";
export const productZodSchema = () => {
  const productSchema = z.object({
    productsName: z.string().nonempty("Enter your products name"),
    category: z.string().nonempty("Enter the category"),
    brand: z.string().nonempty("Enter the brand"),
    price: z.string().nonempty("Enter the price"),
  });

  return { productSchema };
};
