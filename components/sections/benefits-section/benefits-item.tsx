import { cn } from '@/lib/utils';

interface BenefitsItemProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  description: string;
}
const BenefitsItem: React.FC<BenefitsItemProps> = ({
  title,
  description,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        'relative rounded-[36px] bg-white-project p-4 sm:p-8 lg:p-14 dark:bg-accent-400 flex flex-col justify-between',
        className
      )}
    >
      <h3 className="text-3xl leading-[145%] font-semibold tracking-tight line-clamp-2 sm:text-4xl">
        {title.split(' ')[0]}
        <br />
        {title.split(' ')[1]}
      </h3>
      <p className="mt-4 text-lg line-clamp-4">{description}</p>
    </div>
  );
};

export default BenefitsItem;
