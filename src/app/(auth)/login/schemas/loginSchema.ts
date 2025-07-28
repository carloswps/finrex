import * as z from "zod/v4";

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8).max(20)
});

export type loginSchemaType = z.infer<typeof  loginSchema>;