import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface BigButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
const BigButton: React.FC<BigButtonProps> = ({
  children,
  className,
  href,
  ...props
}) => {
  return (
    <Link
      {...props}
      href={href || '/'}
      className="hidden shrink-0 w-64 h-64 bg-accent-300 rounded-[60px] lg:flex items-center justify-center"
    >
      <div className="text-xl font-semibold tracking-tight text-white">
        {children}
      </div>
    </Link>
  );
};

export default BigButton;
