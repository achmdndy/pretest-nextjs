import * as z from 'zod';

export const FindFloorSchema = z.object({
  lockerNumber: z.preprocess(
    val => (typeof val === 'string' ? parseInt(val, 10) : val),
    z
      .number({
        required_error: 'Nomer loker harus diisi',
        invalid_type_error: 'Nomer loker harus berupa angka',
      })
      .min(1, { message: 'Nomer loker tidak boleh kurang dari 1' }),
  ),
});
