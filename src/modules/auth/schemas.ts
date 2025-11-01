import z from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export const registerSchema =     
z.object({
        email: z.string().email(),
        password: z.string().min(8),
        username: z
        .string()
            // [username].shop.com
            .min(3, "Username must be at least 3 characters")
            .max(63, "Username must be less than 63 characters")
            // regex means username must start with a letter or number, can contain letters, numbers, and hyphens, and must end with a letter or number
            .regex(/^[a-z0-9][a-z0-9-]*[a-z0-9]$/, "Username only contains lowercase letters, numbers, and hyphens. It must start and end with a letter or number.")
            .refine((val) => !val.includes("--"), "Username cannot contain two consecutive hyphens")
            .transform((val) => val.toLowerCase())
})