import Image from "next/image";

import { Icons } from "@/components/icons";
import Wrapper from "@/components/wrapper";
import { Spotlight } from "@/components/ui/spotlight";
import OpenModalButton from "@/components/ui/open-modal-button";

const HeroSection = () => {
  return (
    <Wrapper className='pb-8'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      />
      <div className='lg:flex lg:justify-between lg:gap-x-14'>
        <Icons.vector className='hidden pointer-events-none absolute -bottom-[2px] -left-[2px] fill-accent lg:block' />
        <div className='flex flex-col justify-between'>
          <div className='hidden lg:block w-full max-w-[281px]'>
            <p className='text-lg font-semibold tracking-tight'>Важные цифры</p>
            <h2 className='text-5xl font-bold tracking-tight'>4х ярче</h2>
            <p className='text-lg mt-4'>
              Компании, которые запускают рекламу через сайт, получают в среднем
              в 4 раза больше трафика, чем компании, у которых нет присутствия в
              интернете.
            </p>
          </div>
          <div className='hidden lg:block w-full max-w-[281px] pb-10'>
            <p className='text-lg font-semibold tracking-tight'>Расчет</p>
            <p className=' text-3xl tracking-tight mt-5 leading-[45px]'>
              Давайте Бесплатно расчитем для Вас цену?
            </p>
            <OpenModalButton className='mt-4'>Рассчитать</OpenModalButton>
          </div>
        </div>
        <div className='pt-3 pb-7 -mb-6 lg:-mb-16 lg:flex-1 lg:pl-14 lg:space-y-6'>
          <h1 className='text-5xl sm:text-7xl xl:text-8xl 2xl:text-9xl tracking-tight font-semibold'>
            Мы делаем классные сайты.
          </h1>
          <p className='text-lg mt-6 lg:hidden'>
            Компании, которые запускают рекламу через сайт, получают в среднем в
            4 раза больше трафика, чем компании, у которых нет присутствия в
            интернете.
          </p>
          <div className='mt-14 overflow-hidden rounded-[28px] sm:rounded-[56px]'>
            <Image
              src='/images/1.jpg'
              priority
              alt='image'
              width={1920}
              height={1280}
              className='w-full h-full object-cover lg:aspect-[1/1.2] xl:aspect-[1.48/1] 2xl:aspect-[2.3/1]'
            />
          </div>
          <div className='mt-14 max-w-xl lg:hidden'>
            <p className=' text-3xl tracking-tight mt-5 leading-[45px]'>
              Давайте Бесплатно расчитем для Вас стоимость?
            </p>
            <OpenModalButton className='mt-4'>Рассчитать</OpenModalButton>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
