import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PersonalDataNotificationProps
  extends React.HtmlHTMLAttributes<HTMLElement> {}

const PersonalDataNotification: React.FC<PersonalDataNotificationProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn('text-xs mt-4 text-accent dark:text-white/70', className)}
    {...props}
  >
    Мы не собираемся использовать ваши персональные данные для продажи и
    передачи третьим лицам. Об этом написано{' '}
    <Link className="underline" href={'/privacy'}>
      тут.
    </Link>
  </div>
);

export default PersonalDataNotification;
