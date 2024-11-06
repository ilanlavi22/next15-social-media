// signup schema validation

import { z } from "zod";

const requiredString = z.string().trim();

export const signUpSchema = z.object({
  email: requiredString
    .min(1, "Email is required")
    .email("Invalid email address"),

  username: requiredString
    .min(1, "Username is required")
    .regex(
      /^[a-zA-Z0-9_]*$/,
      "Username must only contain letters, numbers, and underscores",
    ),

  password: requiredString.min(8, "Password must be at least 8 characters"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

// login schema validation

export const loginSchema = z.object({
  username: requiredString.min(1, "Username is required"),
  password: requiredString.min(1, "Password is required"),
});

export type LoginValues = z.infer<typeof loginSchema>;
