import { cn } from '@/lib/utils';
import Image from 'next/image';

export enum BGPortfolio {
  light,
  dark,
}

interface PortfolioElementProps extends React.HtmlHTMLAttributes<HTMLElement> {
  image: string;
  title: string;
  description: string;
  link: string;
  bg?: BGPortfolio;
}

const PortfolioElement: React.FC<PortfolioElementProps> = ({
  title,
  description,
  image,
  link,
  bg = BGPortfolio.light,
  className,
  ...props
}) => (
  <a
    href={link}
    target="_blank"
    className={cn(
      'relative overflow-hidden rounded-[35px] md:rounded-[70px] bg-accent aspect-1 ',
      className
    )}
    {...props}
  >
    <Image
      width={1000}
      height={1000}
      src={image}
      //   src={''}
      alt={`${title}_screen`}
      className="absolute transition duration-[4000ms] hover:scale-110   w-full h-full object-cover"
    />
    <div
      className={cn(
        'relative w-full h-full z-10 text-center p-4 sm:p-6 lg:p-14 pointer-events-none',
        bg === BGPortfolio.light
          ? 'text-accent dark:text-accent'
          : 'text-white dark:text-white'
      )}
    >
      <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
      <h3 className="hidden lg:inline-block sm:mt-3">{description}</h3>
    </div>
  </a>
);

export default PortfolioElement;
