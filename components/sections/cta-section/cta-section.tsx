import Container from "@/components/container";
import Button from "@/components/ui/button";
import OpenModalButton from "@/components/ui/open-modal-button";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

interface CTASectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const CTASection: React.FC<CTASectionProps> = ({ className, ...props }) => {
  return (
    <Container {...props} className={className}>
      <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-8 '>
        <div className='flex-auto rounded-[35px] overflow-hidden  sm:rounded-[70px]'>
          <Image
            src='/images/2.jpg'
            alt='image'
            width={1920}
            height={1280}
            className='w-full h-full object-cover aspect-[2/1] lg:aspect-auto'
          />
        </div>
        <div className='relative overflow-hidden max-w-5xl rounded-[35px] bg-white-project px-4 pt-8 pb-8 sm:px-24 sm:pt-14 sm:pb-24  sm:rounded-[70px] lg:px-44 lg:pt-20 lg:pb-44 dark:bg-accent-400'>
          <Spotlight
            className='-top-40 left-0 md:left-60 md:-top-20'
            fill='white'
          />
          <div className='w-full flex justify-end'>
            <div className='ml-auto'>
              <h3 className='text-lg font-semibold tracking-tight'>О нас</h3>
              <p className='font-semibold tracking-tight text-5xl lg:text-6xl'>
                8 лет
              </p>
            </div>
          </div>
          <div className='text-4xl tracking-tight leading-10 font-semibold mt-8 sm:leading-[60px] sm:text-5xl'>
            Желаете увеличить онлайн-присутствие и привлечь новых клиентов?
            Тогда начните расширение вашего бизнеса онлайн!
          </div>
          <p className='text-lg mt-4'>
            Станьте владельцем своего собственного космического сайта!
            Разверните ваш бизнес во вселенной интернета с нашим эксклюзивным
            предложением по созданию сайта прямо сейчас!
          </p>
          <OpenModalButton className='mt-9'>Консультация</OpenModalButton>
        </div>
      </div>
    </Container>
  );
};

export default CTASection;
