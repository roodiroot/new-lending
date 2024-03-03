import Container from '@/components/container';
import { Icons } from '@/components/icons';
import ThemeSwitch from '@/components/theme-swich';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import MenuMobil from './mobil-menu/menu-mobil';
import { publicRoutes } from '@/app/routes';

const Header = () => {
  return (
    <Container>
      <div className="overflow-hidden mt-6 rounded-full bg-accent-400 h-16 pl-4 sm:pl-14">
        <div className="py-2 h-full flex items-center justify-between">
          <div className="hidden lg:block lg:text-white">
            <Link href={'/'}>
              <Icons.logo className="w-[120px] h-auto fill-white" />
            </Link>
          </div>
          <MenuMobil className="sm:-ml-4" />
          <nav>
            <ul className="hidden lg:flex text-white text-lg gap-x-10">
              {publicRoutes.map((i) => (
                <li key={i.name}>
                  <Link href={i.href}>{i.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-x-4 sm:gap-x-8">
            <ThemeSwitch />
            <Link
              href="/contacts"
              className=" bg-white h-16 flex items-center px-6  rounded-lg font-semibold tracking-tight dark:text-accent"
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
