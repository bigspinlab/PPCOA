'use client';

import { Button } from '@/ui-elements/Button';
import { FormField, FormItem, FormControl, FormMessage, Form, FormLabel } from '@/ui-elements/Form';
import RootWrapper from '@/components/RootWrapper';
import { Input } from '@/ui-elements/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui-elements/Select';
import { Textarea } from '@/ui-elements/TextArea';
import { Checkbox } from '@/ui-elements/Checkbox';
import Link from 'next/link';
import { useGetHeadlessContent } from '@/hooks/useGetHeadlessContent';
import { FORM_TYPE_FIELDS, IFormFields, IFormOptions } from '@/types/home';
import { useToast } from '@/hooks/useToast';

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Please type your email.'
    })
    .email(),
  subject: z.string(),
  message: z.string().max(240).min(10),
  policies: z.boolean().default(false)
});

// This can come from your database or API.
const defaultValues: Partial<z.infer<typeof formSchema>> = {
  email: '',
  subject: '',
  message: '',
  policies: false
};

export default function FormContact() {
  const { toast } = useToast();
  const { data: formContent } = useGetHeadlessContent({ route: 'contact', queryKey: 'contactContent' });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange'
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      className: 'fixed bottom-4 right-4 lg:right-16]',
      description: (
        <pre className="mt-2 w-[300px] rounded-md bg-slate-950 p-4">
          <code className="text-white">Thank you for contacting us!</code>
        </pre>
      )
    });

    form.reset();
    console.log(values);
  }

  const formFieldContent = {
    [FORM_TYPE_FIELDS.email]: (fieldItem: IFormFields) => (
      <FormField
        key={fieldItem.id}
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="relative">
            <FormControl>
              <Input type="email" placeholder={fieldItem.placeholder} {...field} required={fieldItem.required} />
            </FormControl>
            <FormMessage className="absolute bottom-[-24px]" />
          </FormItem>
        )}
      />
    ),
    [FORM_TYPE_FIELDS.select]: (fieldItem: IFormFields) => (
      <FormField
        key={fieldItem.id}
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem className="relative">
            <FormControl>
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="justify-between gap-0.5 text-xl font-normal">
                  <SelectValue placeholder={fieldItem.placeholder.toString()} />
                </SelectTrigger>
                <SelectContent>
                  {fieldItem?.options?.map((option: IFormOptions) => {
                    return (
                      <SelectItem key={option.id} value={option.value.toString()}>
                        {option.label.toString()}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage className="absolute bottom-[-24px]" />
          </FormItem>
        )}
      />
    ),
    [FORM_TYPE_FIELDS.textArea]: (fieldItem: IFormFields) => (
      <FormField
        key={fieldItem.id}
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem className="relative">
            <FormControl>
              <Textarea placeholder={fieldItem.placeholder} {...field} required={fieldItem.required} />
            </FormControl>
            <FormMessage className="absolute bottom-[-24px]" />
          </FormItem>
        )}
      />
    ),
    [FORM_TYPE_FIELDS.checkbox]: (fieldItem: IFormFields) => (
      <FormField
        key={fieldItem.id}
        control={form.control}
        name="policies"
        render={({ field }) => (
          <FormItem className="space-y-0 relative flex items-center gap-2">
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <FormLabel className="mt-0">
              <Link href={`${fieldItem.link}`} className="font-bold">
                {fieldItem.label}{' '}
              </Link>
            </FormLabel>
            <FormMessage className="absolute bottom-[-24px]" />
          </FormItem>
        )}
      />
    )
  };

  if (!formContent) {
    return null;
  }

  return (
    <RootWrapper customClassName="w-full flex justify-start">
      <h2 className="sr-only">Contact form</h2>
      <article className="flex flex-col items-start grow">
        <h3 className="font-bold mb-5">{formContent.widgets[0].content.form.title}</h3>
        <Form {...form}>
          <form
            autoComplete="off"
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8 w-full md:w-4/5 lg:w-1/2"
          >
            {formContent.widgets[0].content?.form?.fields?.map((fieldItem: IFormFields) => {
              return formFieldContent[fieldItem.type](fieldItem);
            })}
            <Button
              aria-label="form submit"
              type="submit"
              variant="outline"
              className="ml-auto border-black text-xl px-5 py-2 h-auto"
              disabled={!form.formState.isValid}
            >
              {formContent.widgets[0].content.form.submitText}
            </Button>
          </form>
        </Form>
      </article>
    </RootWrapper>
  );
}
