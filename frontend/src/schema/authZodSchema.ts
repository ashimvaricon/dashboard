import React from "react";
import { z } from "zod";
export const authZodSchema = () => {
  const schema = z.object({
    username: z.string().nonempty("Enter your username"),
    password: z.string().nonempty("Enter your password"),
  });

  return { schema };
};
