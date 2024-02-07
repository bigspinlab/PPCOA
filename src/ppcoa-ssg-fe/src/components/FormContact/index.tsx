'use client';

import { Button } from '@/ui-elements/Button';
import { FormField, FormItem, FormControl, FormMessage, Form } from '@/ui-elements/Form';
import RootWrapper from '@/components/RootWrapper';
import { Input } from '@/ui-elements/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui-elements/Select';
import { Textarea } from '@/ui-elements/TextArea';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  })
});

export default function FormContact() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ''
    }
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <RootWrapper customClassName='w-full flex justify-start'>
      <h2 className="sr-only">Contact form</h2>
      <article className="flex flex-col items-start grow">
        <h3 className="font-bold mb-5">Fale conosco</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full md:w-4/5 lg:w-1/2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Input placeholder="O seu email" {...field} />
                      <Select>
                        <SelectTrigger className="justify-start gap-0.5 text-base font-bold">
                          <SelectValue placeholder="Escolha o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assunto-a">assunto-a</SelectItem>
                          <SelectItem value="assunto-b">assunto-b</SelectItem>
                        </SelectContent>
                      </Select>
                      <Textarea
                        placeholder="Escreva a sua mensagem"
                        className="resize-none"
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </article>
    </RootWrapper>
  );
}
