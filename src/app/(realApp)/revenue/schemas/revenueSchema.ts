import * as z from "zod/v4";

export const revenueSchema = z.object({
    mainIncome: z.number().gt(0),
    freelance: z.number().gt(0),
    benefits: z.number().gt(0),
    businessProfit: z.number().gt(0),
    other: z.number().gt(0),
    transportation: z.number().gt(0),
    rent: z.number().gt(0),
    groceries: z.number().gt(0),
    utilities: z.number().gt(0),
    entertainment: z.number().gt(0)
});


export type revenueSchemaType = z.infer<typeof revenueSchema>;