import { z } from "zod";
export const addZodSchema = () => {
  const addSchema = z.object({
    productsName: z.string().nonempty("Enter your products name"),
    category: z.string().nonempty("Enter the category"),
    brand: z.string().nonempty("Enter the brand"),
    price: z.string().nonempty("Enter the price"),
  });

  return { addSchema };
};
