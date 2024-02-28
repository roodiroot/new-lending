import Container from "@/components/container";
import ThemeSwitch from "@/components/theme-swich";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <Container>
      <div className='relative overflow-hidden mt-6 rounded-full bg-accent-400 h-16 pl-4 sm:pl-14'>
        <div className='py-2 h-full flex items-center justify-between'>
          <div className='hidden lg:block lg:text-white'>Logo</div>
          <div className='lg:hidden p-4 sm:-ml-4'>
            <CiMenuBurger className='w-6 h-6 text-white' />
          </div>
          <nav>
            <ul className='hidden lg:flex text-white text-lg gap-x-10'>
              <li>
                <Link href='/'>Главная</Link>
              </li>
              <li>
                <Link href='/brief'>Бриф</Link>
              </li>
              <li>Цены</li>
              <li>О нас</li>
            </ul>
          </nav>
          <div className='flex items-center gap-x-4 sm:gap-x-8'>
            <ThemeSwitch />
            <Link
              href='/contacts'
              className=' bg-white h-16 flex items-center px-6  rounded-lg font-semibold tracking-tight dark:text-accent'
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
