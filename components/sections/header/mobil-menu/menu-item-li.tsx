import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  onClick?: () => void;
  href?: string;
}
const MenuItemLi: React.FC<MenuItemProps> = ({
  onClick,
  href = '/',
  children,
  className,
}) => {
  return (
    <motion.li
      onClick={onClick}
      className={cn('text-white text-2xl tracking-tight', className)}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href}>{children}</Link>
    </motion.li>
  );
};

export default MenuItemLi;
