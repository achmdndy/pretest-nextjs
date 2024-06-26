import { findFloor } from '@/actions/find-floor';
import { FindFloorSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export const useFindFloor = () => {
  const [error, setError] = useState<string | undefined>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<number | undefined>();

  const form = useForm<z.infer<typeof FindFloorSchema>>({
    resolver: zodResolver(FindFloorSchema),
    defaultValues: {
      lockerNumber: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof FindFloorSchema>) => {
    setError('');
    setLoading(true);

    findFloor(values)
      .then(data => {
        if (data.error) {
          form.reset();
          setError(data.error);
        }

        if (data.floor) {
          setResult(data.floor);
        }

        setLoading(false);
      })
      .catch(() => setError('Something went wrong!'));
  };

  return { form, onSubmit, loading, error, result };
};
