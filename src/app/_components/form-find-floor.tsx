'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { AlertCircle } from 'lucide-react';
import { useFindFloor } from '../_hooks/use-find-floor';

export function FormFindFloor() {
  const { form, onSubmit, loading, error, result } = useFindFloor();
  return (
    <Form {...form}>
      {error && (
        <Alert variant={'destructive'} className="mb-4">
          <AlertCircle className="w-4 h-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="lockerNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Loker</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  disabled={loading}
                  placeholder="Masukkan nomor loker"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {result && (
          <Alert className="mt-4">
            <AlertTitle>Ketemu!</AlertTitle>
            <AlertDescription>Loker berada di lantai {result}</AlertDescription>
          </Alert>
        )}

        <Button disabled={loading} type="submit" className="w-full mt-10">
          Cari
        </Button>
      </form>
    </Form>
  );
}
