import * as z from 'zod/v4';

export const incomeSchema = z.object({
  mainIncome: z.number().gte(0),
  freelance: z.number().gte(0),
  benefits: z.number().gte(0),
  businessProfit: z.number().gte(0),
  other: z.number().gte(0),
});
export type incomeSchemaType = z.infer<typeof incomeSchema>;
