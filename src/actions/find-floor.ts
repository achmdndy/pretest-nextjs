'use server';

import { getFloor } from '@/lib/get-floor';
import { FindFloorSchema } from '@/schemas';
import * as z from 'zod';

export const findFloor = async (values: z.infer<typeof FindFloorSchema>) => {
  const validatedFields = FindFloorSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'Invalid fields!' };

  const { lockerNumber } = validatedFields.data;

  const floor = getFloor(lockerNumber);

  return { floor };
};
