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
import { FORM_TYPE_FIELDS, IContactPage, IFormFields, IFormOptions, IHeadlessContentPage } from '@/types';
import { useToast } from '@/hooks/useToast';
import { ROUTES } from '@/global/constants';
import { getHeadless } from '@/api';
import { useQuery } from '@tanstack/react-query';

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Please type your email.'
    })
    .email(),
  subject: z.string(),
  message: z.string().max(240).min(10),
  policies: z.boolean().refine((value) => value === true, {
    message: 'You forgot to accept the policies.'
  })
});

// This can come from your database or API.
const defaultValues: Partial<z.infer<typeof formSchema>> = {
  email: '',
  subject: '',
  message: '',
  policies: false
};

export default function FormContact({ params }: { params: { lang: string } }) {
  const { toast } = useToast();
  const { data: formContentData } = useQuery<IHeadlessContentPage>({ queryKey: [ROUTES.contact.queryKey], queryFn: () => getHeadless({ route: ROUTES.contact.path, lang: params.lang }) });
  const formContent = formContentData?.widgets[0] as IContactPage;
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange'
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      await fetch('https://danielribamar-001-site1.itempurl.com/api/v1/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      toast({
        className: 'fixed bottom-4 right-4 lg:right-16]',
        description: (
          <pre className="mt-2 w-[300px] rounded-md bg-slate-950 p-4">
            <code className="text-white">Thank you for contacting us!</code>
          </pre>
        )
      });
    } catch (error) {
      toast({
        className: 'fixed bottom-4 right-4 lg:right-16',
        description: (
          <pre className="mt-2 w-[300px] rounded-m bg-red-500 p-4">
            <code className="text-white">Ops! Something went wrong.</code>
          </pre>
        )
      });
    }

    form.reset();
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
              <Input
                autoComplete="off"
                type="email"
                placeholder={fieldItem.placeholder}
                {...field}
                required={fieldItem.required}
              />
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
              <Checkbox checked={field.value} onCheckedChange={field.onChange} required />
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

  if (!formContentData) {
    return null;
  }

  return (
    <RootWrapper customClassName="w-full flex justify-start">
      <h2 className="sr-only">Contact form</h2>
      <article className="flex flex-col items-start grow">
        <h3 className="font-bold mb-5">{formContent.content.form.title}</h3>
        <Form {...form}>
          <form
            autoComplete="off"
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8 w-full md:w-4/5 lg:w-1/2"
          >
            {formContent.content?.form?.fields?.map((fieldItem: IFormFields) => {
              return formFieldContent[fieldItem.type](fieldItem);
            })}
            <Button
              aria-label="form submit"
              type="submit"
              variant="outline"
              className="ml-auto border-black text-xl px-5 py-2 h-auto"
              disabled={!form.formState.isValid}
            >
              {formContent.content.form.submitText}
            </Button>
          </form>
        </Form>
      </article>
    </RootWrapper>
  );
}
