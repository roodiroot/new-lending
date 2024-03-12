'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { BriefSchema } from '@/schemas';
import { sendMessage } from '@/actions/sender';
import { Input } from '@/components/ui/input';
import InputPhoneMask from '@/components/ui/input-phone-mask';
import WarningInput from '@/components/ui/warning-input';
import ButtonContacts from '@/components/ui/button-contacts';
import PersonalDataNotification from '@/components/personal-data-notification';

const FormContacts = () => {
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
      sendMessage(value).then((data: any) => {
        //@ts-ignore
        ym(96707011, 'reachGoal', 'submit');
        form.reset();
        router.push('/thank-you');
      });
    });
  };
  return (
    <>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="w-full flex flex-col gap-3 lg:gap-0 lg:flex-row lg:items-end"
      >
        <div className="flex-1">
          <label
            htmlFor="name"
            className="text-xl font-medium text-white px-4 sm:px-14"
          >
            Ваше имя*
          </label>
          <Input
            className="mt-4 px-4 dark:border-accent/10 dark:text-white dark:placeholder:text-white/40 dark:border-accent-300 sm:px-14 border-x rounded-full lg:border-r-0 lg:rounded-r-none"
            placeholder="Введите Имя"
            {...form.register('name')}
          />
          {form.formState.errors?.name ? (
            <WarningInput
              className="px-4 sm:px-14"
              text={form.formState.errors.name.message}
            />
          ) : (
            <div className="h-4 sm:h-5"></div>
          )}
        </div>
        <div className="flex-1">
          <label
            htmlFor="phone"
            className="text-xl font-medium text-white px-4 sm:px-14"
          >
            Телефон*
          </label>
          <Controller
            name="phone"
            control={form.control}
            render={({ field: { value, onChange } }) => (
              <InputPhoneMask
                className="mt-4 px-4 dark:border-accent/10 dark:text-white dark:placeholder:text-white/40 dark:border-accent-300 border-x sm:px-14 rounded-full lg:border-x-0 lg:rounded-none"
                value={value}
                setValue={onChange}
              />
            )}
          />
          {form.formState.errors?.phone ? (
            <WarningInput
              className="px-4 sm:px-14"
              text={form.formState.errors.phone.message}
            />
          ) : (
            <div className="h-4 sm:h-5"></div>
          )}
        </div>
        <ButtonContacts className="lg:mb-5" disabled={isPending}>
          Отправить
        </ButtonContacts>
      </form>
      <PersonalDataNotification className="text-white" />
    </>
  );
};

export default FormContacts;
