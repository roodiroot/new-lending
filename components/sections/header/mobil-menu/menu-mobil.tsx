'use client';

import { motion, useCycle } from 'framer-motion';
import { CiMenuBurger } from 'react-icons/ci';

import { cn } from '@/lib/utils';
import { MenuToggle } from './menu-togle';
import MobilPopup from './mobil-popup';
import { useSize } from '@/hooks/use-size';

interface MenuMobilProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const MenuMobil: React.FC<MenuMobilProps> = ({ className }) => {
  const { width } = useSize();
  const [isOpen, toggleOpen] = useCycle(false, true);

  if (!width || width > 1023) {
    return null;
  }

  return (
    <motion.nav
      className={cn(
        'p-4 flex justify-center items-center lg:hidden',
        className
      )}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <MobilPopup close={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MenuMobil;
