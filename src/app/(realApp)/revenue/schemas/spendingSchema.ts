import * as z from 'zod/v4';

export const spendingSchema = z.object({
  transportation: z.number().gt(0),
  rent: z.number().gte(0),
  groceries: z.number().gte(0),
  utilities: z.number().gte(0),
  entertainment: z.number().gte(0),
});

export type spendingSchemaType = z.infer<typeof spendingSchema>;
