// app/api/auth/register/route.js
import { hash } from "bcryptjs";
import { z } from "zod";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must not exceed 50 characters")
      .regex(
        /^[a-zA-Z\s'-]+$/,
        "Name cannot contain numbers or special characters"
      )
      .refine(
        (val) => val.trim().length >= 2,
        "Name must be at least 2 characters"
      )
      .transform((val) => val.trim()),
    email: z
      .string()
      .email("Invalid email address")
      .max(255, "Email must not exceed 255 characters")
      .toLowerCase()
      .transform((val) => val.trim()),
    password: z
      .string()
      .min(12, "Password must be at least 12 characters")
      .max(128, "Password must not exceed 128 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validatedData = registerSchema.parse(body);
    const { name, email, password } = validatedData;

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await hash(password, 10);
    console.log("Original password:", password);
    console.log("Hashed password:", hashedPassword);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      provider: "credentials",
    });

    return Response.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      const fieldErrors =
        error.issues?.map((issue) => ({
          field: issue.path?.[0] || "unknown",
          message: issue.message,
        })) || [];
      return Response.json(
        { error: "Validation failed", details: fieldErrors },
        { status: 400 }
      );
    }

    return Response.json(
      { error: error.message || "Registration failed" },
      { status: 500 }
    );
  }
}
