'use client';

import { useTransition } from 'react';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { BriefSchema } from '@/schemas';
import { sendMessage } from '@/actions/sender';
import { Input, Label } from '@/components/ui/input';
import InputPhoneMask from '@/components/ui/input-phone-mask';
import WarningInput from '@/components/ui/warning-input';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/button';
import PersonalDataNotification from '@/components/personal-data-notification';

interface FormFidbackModalProps
  extends React.HtmlHTMLAttributes<HTMLFormElement> {
  onClose?: () => void;
}

const FormFidbackModal: React.FC<FormFidbackModalProps> = ({
  className,
  onClose,
  ...props
}) => {
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
        window.ym(96707011, 'reachGoal', 'submit');
        form.reset();
        if (onClose) onClose();
        setTimeout(() => {
          router.push('/thank-you');
        }, 1000);
      });
    });
  };
  return (
    <form
      {...props}
      className={cn('', className)}
      onSubmit={form.handleSubmit(submit)}
    >
      <div className="space-y-11">
        <div className="-mx-6 sm:-mx-14 lg:-mx-32">
          <Label
            htmlFor="name"
            text="Ваше имя*"
            className="px-6 sm:px-14 lg:px-32"
          />
          <Input
            className="mt-4 px-6 sm:px-14 lg:px-32 text-accent placeholder:text-accent-400 border-accent-300/20 dark:text-white dark:placeholder:text-white/60 dark:border-accent-300"
            placeholder="Введите Имя"
            {...form.register('name')}
          />
          {form.formState.errors?.name ? (
            <WarningInput
              className="px-6 sm:px-14 lg:px-32"
              text={form.formState.errors.name.message}
            />
          ) : (
            <div className="h-4 sm:h-5"></div>
          )}
        </div>
        <div className="-mx-6 sm:-mx-14 lg:-mx-32">
          <Label
            htmlFor="phone"
            text="Номер телефона*"
            className="px-6 sm:px-14 lg:px-32"
          />
          <Controller
            name="phone"
            control={form.control}
            render={({ field: { value, onChange } }) => (
              <InputPhoneMask
                className="mt-4 px-6 sm:px-14 lg:px-32 text-accent placeholder:text-accent-400 border-accent-300/20 dark:text-white dark:placeholder:text-white/60 dark:border-accent-300"
                value={value}
                setValue={onChange}
              />
            )}
          />
          {form.formState.errors?.phone ? (
            <WarningInput
              className="px-6 sm:px-14 lg:px-32"
              text={form.formState.errors.phone.message}
            />
          ) : (
            <div className="h-4 sm:h-5"></div>
          )}
        </div>
      </div>
      <Button indigo className="mt-14" type="submit" disabled={isPending}>
        Отправить
      </Button>
      <PersonalDataNotification
        onClick={() => {
          if (onClose) {
            onClose();
          }
        }}
      />
    </form>
  );
};

export default FormFidbackModal;
