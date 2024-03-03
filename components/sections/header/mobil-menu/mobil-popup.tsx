import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import MenuItemLi from './menu-item-li';
import MenuItem from './menu-item';
import { cn } from '@/lib/utils';
import { publicRoutes } from '@/app/routes';

const variants = {
  open: {
    opacity: 1,
    visability: 'visible',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    visability: 'hidden',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface MobilPopupProps extends React.HtmlHTMLAttributes<HTMLElement> {
  close?: () => void;
}

const MobilPopup: React.FC<MobilPopupProps> = ({ close, className }) => (
  <motion.div
    className={cn('absolute z-20 top-24 inset-x-0  px-4 sm:px-8', className)}
    variants={variants}
  >
    <div className="mt-4 bg-accent-300 rounded-[35px] p-8 sm:p-10">
      <div className="flex flex-col">
        <div className="flex flex-col-reverse gap-y-14 items-start sm:flex-row pb-8">
          <ul className="flex-1 grid gap-y-9 grid-cols-1 sm:grid-cols-2">
            {publicRoutes.map((i) => (
              <MenuItemLi onClick={close} key={i.name} href={i.href}>
                {i.name}
              </MenuItemLi>
            ))}
          </ul>
          <Link className="shrink-0" href={'/'}>
            <MenuItem>
              <Icons.logo
                onClick={close}
                className="w-[130px] h-auto fill-white"
              />
            </MenuItem>
          </Link>
        </div>
        <div className="border border-accent-400/20 -mx-8 sm:-mx-10"></div>
        <div className="pt-8 flex flex-col gap-y-10 sm:flex-row sm:items-end ">
          <MenuItem className="flex-1 flex flex-col gap-3">
            <a
              href="mailto:hello@matryoshka-studio.ru"
              className="text-white text-lg"
            >
              hello@matryoshka-studio.ru
            </a>
            <a href="tel:+79875704514" className="text-white text-lg">
              + 7 (987) 570-45-14
            </a>
          </MenuItem>
          <MenuItem className="text-white/70 text-xs">
            <Link onClick={close} href={'/privacy'}>
              Политика конфиденциальности
            </Link>
          </MenuItem>
        </div>
      </div>
    </div>
  </motion.div>
);

export default MobilPopup;
