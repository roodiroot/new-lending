'use client';

import * as z from 'zod';
import { useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BriefSchema } from '@/schemas';
import { sendMessage } from '@/actions/sender';
import InputPhoneMask from '@/components/ui/input-phone-mask';
import WarningInput from '@/components/ui/warning-input';
import { useRouter } from 'next/navigation';

interface BriefFormProps extends React.HtmlHTMLAttributes<HTMLElement> {
  answer?: string[];
}
const BriefForm: React.FC<BriefFormProps> = ({ answer, ...props }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof BriefSchema>>({
    resolver: zodResolver(BriefSchema),
    defaultValues: {
      name: '',
      phone: '',
    },
  });
  const submit = (value: z.infer<typeof BriefSchema>) => {
    startTransition(() => {
      sendMessage(value, answer && JSON.stringify(answer)).then((data: any) => {
        //@ts-ignore
        ym(96707011, 'reachGoal', 'brief');
        router.push('/thank-you');
      });
    });
  };
  return (
    <form
      {...props}
      onSubmit={form.handleSubmit(submit)}
      className="mt-10 flex gap-6 flex-col"
    >
      <div className="-mx-4 sm:-mx-14">
        <Input
          className="px-4 sm:px-14"
          placeholder="Введите Имя"
          {...form.register('name')}
        />
        {form.formState.errors?.name && (
          <WarningInput
            className="px-4 sm:px-14"
            text={form.formState.errors.name.message}
          />
        )}
      </div>
      <div className="-mx-4 sm:-mx-14">
        <Controller
          name="phone"
          control={form.control}
          render={({ field: { value, onChange } }) => (
            <InputPhoneMask
              className="px-4 sm:px-14"
              value={value}
              setValue={onChange}
            />
          )}
        />
        {form.formState.errors?.phone && (
          <WarningInput
            className="px-4 sm:px-14"
            text={form.formState.errors.phone.message}
          />
        )}
      </div>
      <div className="">
        <Button
          disabled={isPending}
          type="submit"
          className=" bg-white text-accent dark:bg-accent dark:text-white "
        >
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default BriefForm;
